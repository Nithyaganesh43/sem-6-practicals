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
  "01": {
    filename: "01-fast-input-output.cpp",
    title: "Fast Input/Output Methods"
  },
  "02": {
    filename: "02-gcd-lcm-n-integers.cpp",
    title: "GCD and LCM of N Integers"
  },
  "03": {
    filename: "03-prime-factorization.cpp",
    title: "Prime Factorization Algorithm"
  },
  "04": {
    filename: "04-maximum-subarray-sum.cpp",
    title: "Maximum Subarray Sum"
  },
  "05": {
    filename: "05-k-largest-elements.cpp",
    title: "K Largest Elements Using Priority Queue"
  },
  "06": {
    filename: "06-fenwick-tree-range-sum.cpp",
    title: "Fenwick Tree for Range Sum Queries"
  },
  "07": {
    filename: "07-union-find-cycle-detection.cpp",
    title: "Union-Find: Cycle Detection in Graph"
  },
  "08": {
    filename: "08-fractional-knapsack.cpp",
    title: "Fractional Knapsack (Greedy Approach)"
  },
  "09": {
    filename: "09-01-knapsack.cpp",
    title: "0/1 Knapsack (Dynamic Programming)"
  },
  "10": {
    filename: "10-ternary-search-unimodal.cpp",
    title: "Ternary Search on Unimodal Function"
  },
  "11": {
    filename: "11-bit-manipulation-subset-sum.cpp",
    title: "Bit Manipulation: Subset Sum"
  },
  "12": {
    filename: "12-sieve-of-eratosthenes.cpp",
    title: "Sieve of Eratosthenes"
  },
  "13": {
    filename: "13-bitmask-dp.cpp",
    title: "Bitmask Dynamic Programming"
  },
  "14": {
    filename: "14-trie-prefix-matching.cpp",
    title: "Trie Data Structure for Prefix Matching"
  },
  "m": {
    filename: "U23CS584_CP_LAB_RECORD.md",
    title: "Lab Manual"
  }
};

const cpDir = path.join(__dirname, "cp");

app.get("/", (req, res) => {
  const order = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "m"
  ];

  const lines = [];

  lines.push("=========== CP LAB ===========");
  lines.push("");
  lines.push("Step 1: Open terminal (Command Prompt or PowerShell)");
  lines.push("");

  const baseUrl = `${req.protocol}://${req.get("host")}`;
  lines.push(`  curl.exe ${baseUrl}/     → get this list`);
  lines.push("");
  lines.push("Step 2: To download a file,");
  lines.push("use the given command in the 'terminal cmd' column for the desired experiment");
  lines.push("");
  lines.push("");
  lines.push("--------------------------------");
  lines.push("");
  lines.push("S.No | Exp Name                                | terminal cmd");
  lines.push("--------------------------------");

  order.forEach(id => {
    const exp = experiments[id];
    if (!exp) return;

    const title = exp.title || "Experiment";
    const paddedTitle = title.padEnd(38);
    const fileName = exp.filename;

    lines.push(
      `${id.padEnd(2)} | ${paddedTitle} | curl.exe -o ${fileName} ${baseUrl}/${id}`
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


  const fileName = experiment.filename;
  const filePath = path.join(cpDir, fileName);

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

//file request on /{id} should return the file as a download with the name of the file as the .cpp filename















const PORT = process.env.PORT || 3000;
 
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});