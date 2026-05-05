// PlayfairCipher.java
import java.util.*;

public class PlayfairCipher {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the plain text: ");
        String plain = sc.next().toUpperCase();

        System.out.println("Enter the key: ");
        String key = sc.next().toUpperCase();

        System.out.println("\nEncryption using playfair:\n");

        String pairplain = pair(plain);
        char[][] keymatrix = formKeyMatrix(key);

        System.out.println("Filler letter: X\n");
        System.out.println("5x5 key matrix(considering I and J as a single letter): ");

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print(keymatrix[i][j] + " ");
            }
            System.out.println();
        }

        String ciphertext = toCipherOrPlain(keymatrix, pairplain);
        System.out.println("\nCorresponding Cipher text: " + ciphertext);

        System.out.println("\nDecryption using playfair:\n");

        String paircipher = pair(ciphertext);
        String pt = toCipherOrPlain(keymatrix, paircipher);
        String plaintext = removeFiller(pt);

        System.out.println("Cipher text: " + ciphertext);
        System.out.println("Corresponding Plain text: " + plaintext);

        sc.close();
    }

    public static String pair(String plain) {
        StringBuilder pair = new StringBuilder();
        char filler = 'X';

        for (int i = 0; i < plain.length(); i++) {
            char a = plain.charAt(i);
            char b;

            if (i + 1 < plain.length()) {
                b = plain.charAt(i + 1);
                if (a != b) {
                    pair.append(a).append(b);
                    i++;
                } else {
                    pair.append(a).append(filler);
                }
            } else {
                pair.append(a).append(filler);
            }
        }

        return pair.toString();
    }

    public static char[][] formKeyMatrix(String key) {
        key = key.replaceAll("J", "I");

        char[][] keymatrix = new char[5][5];
        Set<Character> unique = new LinkedHashSet<>();

        for (int i = 0; i < key.length(); i++) {
            unique.add(key.charAt(i));
        }

        for (char c = 'A'; c <= 'Z'; c++) {
            if (c != 'J') {
                unique.add(c);
            }
        }

        Iterator<Character> iter = unique.iterator();
        int index = 0;

        while (iter.hasNext()) {
            keymatrix[index / 5][index % 5] = iter.next();
            index++;
        }

        return keymatrix;
    }

    public static String toCipherOrPlain(char[][] key, String pair) {
        StringBuilder result = new StringBuilder();

        for (int ind = 0; ind < pair.length(); ind += 2) {
            char a = pair.charAt(ind);
            char b = pair.charAt(ind + 1);

            int frow = 0, fcol = 0, srow = 0, scol = 0;

            for (int i = 0; i < 5; i++) {
                for (int j = 0; j < 5; j++) {
                    if (key[i][j] == a) {
                        frow = i;
                        fcol = j;
                    }
                    if (key[i][j] == b) {
                        srow = i;
                        scol = j;
                    }
                }
            }

            if (frow == srow) {
                result.append(key[frow][(fcol + 1) % 5]);
                result.append(key[srow][(scol + 1) % 5]);
            } else if (fcol == scol) {
                result.append(key[(frow + 1) % 5][fcol]);
                result.append(key[(srow + 1) % 5][scol]);
            } else {
                result.append(key[frow][scol]);
                result.append(key[srow][fcol]);
            }
        }

        return result.toString();
    }

    public static String removeFiller(String text) {
        StringBuilder ct = new StringBuilder(text);

        for (int i = 0; i < ct.length(); i++) {
            if (ct.charAt(i) == 'X') {
                ct.deleteCharAt(i);
                i--;
            }
        }

        return ct.toString();
    }
}
// javac PlayfairCipher.java
// java PlayfairCipher