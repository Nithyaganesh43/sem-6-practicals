// MD5Hashing.java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Hashing {

    public static String generateMD5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");

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
        String md5Hash = generateMD5(text);

        System.out.println("Original Text: " + text);
        System.out.println("MD5 Message Digest: " + md5Hash);
    }
}
// javac MD5Hashing.java
// java MD5Hashing