const path = require('path');
const fs = require('fs');


//verify and convert route into absolute
const isAbsolutePath =  (route) => path.isAbsolute (route);
const convertAbsolute = (route) => {
    return path.isAbsolute(route) ? route : path.resolve(route);
};

//verify the existence of the route
const verifyPathExistence = (path) => {
return fs.existsSync(path);
};

//verify the extensions, is it Markdown?
const isItMarkdown = (route) => {
const validExtensions = path.extname(route);
const extensions = [".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text"];
return extensions.includes(validExtensions);
}; 
//console.log(isItMarkdown("docs/04-milestone."))

//read the Markdown file (fs promises)
const readingFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};

//extraer links 
const linksExtract = (content, route) => {
  const regExpLink = /\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g;
  const links = [];
  let coincidence;
  const fileName = path.basename(route);
  while ((coincidence = regExpLink.exec(content)) !== null) {
    const linkObject = {
      href: coincidence[2],
      text: coincidence[1],
      file: fileName,
    };
      links.push(linkObject);
  } 
  return links;

};

// const content = '[Enlace 1](https://www.ejemplo.com) y [Enlace 2](https://www.otroejemplo.com)';
// const route = '/ruta/ejemplo.md';

// // Llama a la función linksExtract
// const links = linksExtract(content, route);

// // Imprime los resultados con console.log
// console.log('Enlaces extraídos:', links);



module.exports = {
  isAbsolutePath,
  convertAbsolute,
  verifyPathExistence,
  isItMarkdown,
  readingFile,
  linksExtract,
};