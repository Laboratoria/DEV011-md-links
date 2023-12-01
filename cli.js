#! /usr/bin/env node
const mdLinks = require("./src/index.js");
let filePath = process.argv[2];
let validate = false;
let stats = false;

const args = process.argv.slice(2);

if (args.length !== 1 && args.length !== 2 && args.length !== 3) {
  console.log('Uso: md-links READMEDEPRUEBA.md [--validate] [--stats]');
} else {
  filePath = args[0];
  validate = args.includes('--validate');
  stats = args.includes('--stats');
}

mdLinks(filePath, validate, stats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));