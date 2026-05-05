import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
class SHA1Hashing {
public static String generateSHA1(String input) {
try {
// Create MessageDigest instance for SHA-1
MessageDigest md = MessageDigest.getInstance("SHA-1");
// Compute the hash
byte[] messageDigest = md.digest(input.getBytes());
// Convert byte array to hexadecimal format
StringBuilder hexString = new StringBuilder();
for (byte b : messageDigest) {
hexString.append(String.format("%02x", b));
}
return hexString.toString();
} catch (NoSuchAlgorithmException e) {
throw new RuntimeException(e);
}
}
35
public static void main(String[] args) {
String text = "Hello, World!";
String sha1Hash = generateSHA1(text);
System.out.println("Original Text: " + text);
System.out.println("SHA-1 Message Digest: " + sha1Hash);}}