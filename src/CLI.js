#!/usr/bin/env node
 const mdLinks = require  ('./index.js');

 mdLinks("README.md")
 .then(links => {
   console.log(links);
 })
 .catch(error => {
   console.error(error);
 });
 