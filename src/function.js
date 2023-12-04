const path = require('path');
const fs = require('fs');
const { error } = require('console');
const axios = requiere ('axios');


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

//extract the links 
const linksExtract = (content, route) => {
  const regExpLink = /\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g;
  const links = [];
  let found;
  const fileRoute = path.basename(route);
  while ((found = regExpLink.exec(content)) !== null) {
    const linkObjects = {
      href: found[2],
      text: found[1],
      file: fileRoute,
    };
      links.push(linkObjects);
  } 
  return links;
};

//validate the links, and give status information (http)
const validateLinks = (links) => {
  return axios.get(links)
  .then((response) => {
    return response.status;
  })
  .catch(error => {
    throw error;
  });
}



module.exports = {
  isAbsolutePath,
  convertAbsolute,
  verifyPathExistence,
  isItMarkdown,
  readingFile,
  linksExtract,
  validateLinks,
};