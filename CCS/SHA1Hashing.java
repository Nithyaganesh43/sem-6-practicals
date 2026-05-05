// SHA1Hashing.java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHA1Hashing {

    public static String generateSHA1(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");

            byte[] messageDigest = md.digest(input.getBytes());

            StringBuilder hexString = new StringBuilder();
            for (byte b : messageDigest) {
                hexString.append(String.format("%02x", b));
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        String text = "Hello, World!";
        String sha1Hash = generateSHA1(text);

        System.out.println("Original Text: " + text);
        System.out.println("SHA-1 Message Digest: " + sha1Hash);
    }
}
// javac SHA1Hashing.java
// java SHA1Hashing