// RSAAlgorithm.java
import java.math.BigInteger;
import java.security.SecureRandom;

public class RSAAlgorithm {

    private BigInteger n, d, e;
    private int bitlen = 1024;

    public RSAAlgorithm() {
        SecureRandom random = new SecureRandom();

        BigInteger p = BigInteger.probablePrime(bitlen / 2, random);
        BigInteger q = BigInteger.probablePrime(bitlen / 2, random);

        n = p.multiply(q);

        BigInteger phi = (p.subtract(BigInteger.ONE)).multiply(q.subtract(BigInteger.ONE));

        e = BigInteger.probablePrime(bitlen / 2, random);

        while (phi.gcd(e).compareTo(BigInteger.ONE) > 0 && e.compareTo(phi) < 0) {
            e = e.add(BigInteger.ONE);
        }

        d = e.modInverse(phi);
    }

    public BigInteger encrypt(BigInteger message) {
        return message.modPow(e, n);
    }

    public BigInteger decrypt(BigInteger cipher) {
        return cipher.modPow(d, n);
    }

    public static void main(String[] args) {
        RSAAlgorithm rsa = new RSAAlgorithm();

        String message = "This is the sample text for RSA Algorithm";

        BigInteger messageInt = new BigInteger(message.getBytes());

        BigInteger cipherText = rsa.encrypt(messageInt);
        BigInteger decryptedMessage = rsa.decrypt(cipherText);

        System.out.println("Original Message: " + message);
        System.out.println("Encrypted Message: " + cipherText);
        System.out.println("Decrypted Message: " + new String(decryptedMessage.toByteArray()));
    }
}
// javac RSAAlgorithm.java
// java RSAAlgorithm