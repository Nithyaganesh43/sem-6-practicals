const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const password = "382005";
let isLocked = false;
let totalApiCalls = 0;

app.set("trust proxy", 1);

// Keep your original limits
const rateLimitWindowMs = 60 * 1000;  
const maxRequests = 1000;
const ipStore = new Map();

app.use((req, res, next) => {
  if (req.path !== "/favicon.ico") {
    totalApiCalls += 1;
  }
  next();
});

app.use((req, res, next) => {
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
      message: "Too many requests"
    });
  }

  next();
});

app.get(`/${password}`, (req, res) => {
  isLocked = !isLocked;
  res.type("text/plain").send(isLocked ? "locked" : "unlocked");
});

app.use((req, res, next) => {
  if (isLocked) {
    return res.status(423).type("text/plain").send("locked");
  }

  next();
});
 
const experiments = {
  "1a": {
    filename: "CaesarCipher",
    title: "implement the Caesar Cipher technique for encryption and decryption"
  },
  "1b": {
    filename: "PlayfairCipher",
    title: "implement the Playfair Cipher technique for encryption and decryption"
  },
  "1c": {
    filename: "HillCipher",
    title: "implement the Hill Cipher technique for encryption and decryption"
  },
  "2a": {
    filename: "RailFenceCipher",
    title: "implement the Rail fence technique – Row major transformation for transposition"
  },
  "2b": {
    filename: "RailFence",
    title: "implement the Rail fence technique – Column major transformation for transposition"
  },
  "3a": {
    filename: "DESAlgorithm",
    title: "implement DES encryption algorithm"
  },
  "3b": {
    filename: "AESAlgorithm",
    title: "implement AES encryption algorithm"
  },
  "3c": {
    filename: "RSAAlgorithm",
    title: "implement RSA encryption algorithm"
  },
  "4": {
    filename: "DiffieHellman",
    title: "implement the Diffie-Hellman Key Exchange mechanism considering Alice and Bob"
  },
  "5": {
    filename: "SHA1Hashing",
    title: "calculate the message digest of a text using the SHA-1 algorithm"
  },
  "6": {
    filename: "MD5Hashing",
    title: "calculate the message digest of a text using the MD-5 algorithm"
  },
  "7": {
    filename: "7.pkt",
    title: "Packet Tracer file"
  },
  "m" : {
    filename: "LabManual.pdf",
  }
};

const ccsDir = path.join(__dirname, "CCS");

app.get("/", (req, res) => {
  const order = ["1a", "1b", "1c", "2a", "2b", "3a", "3b", "3c", "4", "5", "6", "7", "m"];

  const lines = [];

  lines.push("=========== CCS Payalugada ===========");
  lines.push("");
  lines.push("Step 1: Open terminal (Command Prompt or PowerShell)");
  lines.push("");

  lines.push("  curl.exe https://ccs6sem.onrender.com/     → get this list");
  lines.push("");
  lines.push("Step 2: To download a file,");
  lines.push("use the given command in the 'terminal cmd' column for the desired experiment");
  lines.push("");
  lines.push("");
  lines.push("--------------------------------");
  lines.push("");
  lines.push("S.No | Exp Name                 | terminal cmd");
  lines.push("--------------------------------");

  order.forEach(id => {
    const exp = experiments[id];
    if (!exp) return;

    // Clean titles (shortened like your desired output)
    let title = exp.title || "Lab Manual";

    if (title.includes("Caesar")) title = "Caesar Cipher";
    else if (title.includes("Playfair")) title = "Playfair Cipher";
    else if (title.includes("Hill")) title = "Hill Cipher";
    else if (title.includes("Row major")) title = "Rail Fence (Row)";
    else if (title.includes("Column major")) title = "Rail Fence (Column)";
    else if (title.includes("DES")) title = "DES Algorithm";
    else if (title.includes("AES")) title = "AES Algorithm";
    else if (title.includes("RSA")) title = "RSA Algorithm";
    else if (title.includes("Diffie")) title = "Diffie-Hellman";
    else if (title.includes("SHA-1")) title = "SHA-1 Hashing";
    else if (title.includes("MD-5")) title = "MD5 Hashing";
    else if (id === "7") title = "Packet Tracer (.pkt)";
    else if (id === "m") title = "Lab Manual";

    // alignment
    const paddedTitle = title.padEnd(24);
    const fileName = exp.filename && exp.filename.includes(".")
      ? exp.filename
      : `${exp.filename}.java`;

    lines.push(
      `${id.padEnd(2)} | ${paddedTitle} | curl.exe -o ${fileName} https://ccs6sem.onrender.com/${id}`
    );
  });

  lines.push("");
  lines.push("--------------------------------");
  lines.push("");
  lines.push(`TOTAL: ${order.filter(id => experiments[id]).length}`);
  lines.push(`TOTAL API CALLS: ${totalApiCalls}`);
  lines.push("================================");

  res.type("text/plain").send(lines.join("\n"));
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const experiment = experiments[id];

  if (!experiment || !experiment.filename) {
    return res.status(404).json({
      success: false,
      message: "Unknown id"
    });
  } 


  const fileName = experiment.filename.includes(".")
    ? experiment.filename
    : `${experiment.filename}.java`;
  const filePath = path.join(ccsDir, fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "File not found"
    });
  }

  return res.download(filePath, fileName, err => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Failed to send file"
      });
    }
  });
});

//root api is hit by curl in terminal that must return the list as clear as possible user need to see clearly 

//file request on /{id} should return the file as a download with the name of the file as {id}.java















const PORT = process.env.PORT || 3000;
 
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});