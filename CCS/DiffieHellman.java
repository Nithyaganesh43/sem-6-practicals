// DiffieHellman.java
import java.math.BigInteger;
import java.security.SecureRandom;

public class DiffieHellman {

    private static final int BIT_LENGTH = 512;
    private static final SecureRandom random = new SecureRandom();

    public static void main(String[] args) {
        BigInteger p = BigInteger.probablePrime(BIT_LENGTH, random);
        BigInteger g = BigInteger.probablePrime(BIT_LENGTH / 2, random);

        BigInteger a = new BigInteger(BIT_LENGTH, random);
        BigInteger A = g.modPow(a, p);

        BigInteger b = new BigInteger(BIT_LENGTH, random);
        BigInteger B = g.modPow(b, p);

        BigInteger aliceSharedKey = B.modPow(a, p);
        BigInteger bobSharedKey = A.modPow(b, p);

        System.out.println("Public Prime (p): " + p);
        System.out.println("Public Base (g): " + g);
        System.out.println("Alice's Private Key: " + a);
        System.out.println("Alice's Public Key (A): " + A);
        System.out.println("Bob's Private Key: " + b);
        System.out.println("Bob's Public Key (B): " + B);
        System.out.println("Alice's Computed Shared Key: " + aliceSharedKey);
        System.out.println("Bob's Computed Shared Key: " + bobSharedKey);
        System.out.println("Shared Key Match: " + aliceSharedKey.equals(bobSharedKey));
    }
}
// javac DiffieHellman.java
// java DiffieHellman