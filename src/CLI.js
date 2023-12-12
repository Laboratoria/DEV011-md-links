#!/usr/bin/env node
 const mdLinks = require  ('./index.js');
 console.log(process.argv);
const path = process.argv[2];//lee desde la posición 2 del array que se devuelve
const validate = true;

 mdLinks(path,validate)
 .then(links => {
   console.log(links);
 })
 .catch(error => {
   console.error(error);
 });
 