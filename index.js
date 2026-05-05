const express = require("express");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const app = express();

const rateLimitWindowMs = 60 * 1000;  
const maxRequests = 100;
const ipStore = new Map();

app.use((req, res, next) => {
  const istTime = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata"
});
console.log(`${istTime} ip=${req.ip}`);
  const ip = req.ip;
  const now = Date.now();

  if (!ipStore.has(ip)) {
    ipStore.set(ip, []);
  }

  let timestamps = ipStore.get(ip);

  timestamps = timestamps.filter(time => now - time < rateLimitWindowMs);

  timestamps.push(now);
  ipStore.set(ip, timestamps);

  if (timestamps.length > maxRequests) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Try again later."
    });
  }

  next();
});
 
const experiments = {
  "1a": {
    filename: "CaesarCipher",
    title: "Write a program to implement the Caesar Cipher technique for encryption and decryption"
  },
  "1b": {
    filename: "PlayfairCipher",
    title: "Write a program to implement the Playfair Cipher technique for encryption and decryption"
  },
  "1c": {
    filename: "HillCipher",
    title: "Write a program to implement the Hill Cipher technique for encryption and decryption"
  },
  "2a": {
    filename: "RailFenceCipher",
    title: "Write a program to implement the Rail fence technique – Row major transformation for transposition"
  },
  "2b": {
    filename: "RailFence",
    title: "Write a program to implement the Rail fence technique – Column major transformation for transposition"
  },
  "3a": {
    filename: "DESAlgorithm",
    title: "Write a program to implement DES encryption algorithm"
  },
  "3b": {
    filename: "AESAlgorithm",
    title: "Write a program to implement AES encryption algorithm"
  },
  "3c": {
    filename: "RSAAlgorithm",
    title: "Write a program to implement RSA encryption algorithm"
  },
  "4": {
    filename: "DiffieHellman",
    title: "Write a program to implement the Diffie-Hellman Key Exchange mechanism considering Alice and Bob"
  },
  "5": {
    filename: "SHA1Hashing",
    title: "Write a program to calculate the message digest of a text using the SHA-1 algorithm"
  },
  "6": {
    filename: "MD5Hashing",
    title: "Write a program to calculate the message digest of a text using the MD-5 algorithm"
  },
  "m" : {
    filename: "LabManual",
  }
};


//root api is hit by curl in terminal that must return the list as clear as possible user need to see clearly 

//file request on /{id} should return the file as a download with the name of the file as {id}.java















const PORT = process.env.PORT || 80;
 
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});