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

//read a file



/*const testRoute = 'C:/Users/caroo/Desktop/Laboratoria/DEV011-md-links';
console.log(`Is "${testRoute}" an absolute path? ${isAbsolutePath(testRoute)}`);
console.log(`Converted absolute path: ${convertAbsolute(testRoute)}`);*/

module.exports = {
  isAbsolutePath,
  convertAbsolute,
  verifyPathExistence,
  isItMarkdown,
};