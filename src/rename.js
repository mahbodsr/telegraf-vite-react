const fs = require("fs");
const path = require("path");

const OLD = path.join(__dirname, "..", "dist", "index.html");
const NEW = path.join(__dirname, "..", "dist", "root.html");

if (fs.existsSync(OLD)) fs.unlinkSync(OLD, NEW);
