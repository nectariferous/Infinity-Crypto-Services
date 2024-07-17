const fs = require('fs');
const path = require('path');

const projectStructure = {
  'public': {
    'index.html': '<html><body><h1>Infinity Crypto Services</h1></body></html>',
    'styles.css': 'body { font-family: Arial, sans-serif; }',
    'main.js': 'console.log("Infinity Crypto Services");'
  },
  'src': {
    'server.js': `
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
    `,
    'tasks.js': 'exports.verifyTasks = () => console.log("Verify tasks");',
    'claim.js': 'exports.claimTokens = () => console.log("Claim tokens");'
  },
  'contracts': {
    'AirdropToken.sol': `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InfinityCryptoToken {
    string public name = "Infinity Crypto";
    string public symbol = "INFINITY";
}
    `
  },
  'package.json': `
{
  "name": "infinity-crypto-services",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
  `,
  '.env': 'PORT=3000'
};

function createDirectoryStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const currentPath = path.join(basePath, key);
    if (typeof value === 'object') {
      fs.mkdirSync(currentPath, { recursive: true });
      createDirectoryStructure(currentPath, value);
    } else {
      fs.writeFileSync(currentPath, value.trim());
    }
  }
}

createDirectoryStructure(process.cwd(), projectStructure);

console.log('Project structure created successfully!');
console.log('To start developing:');
console.log('1. Open this folder in VS Code');
console.log('2. Run `npm install` to install dependencies');
console.log('3. Use VS Code\'s integrated terminal to run `npm start`');
