//funciones pequeñas para la promesa MDlinks
const path = require('path');
const fs = require('fs');

//verify and convert route into absolute
const isAbsolutePath =  (route) => path.isAbsolute (route);
const convertAbsolute = (route) => {
    return path.isAbsolute(route) ? route : path.resolve(route);
};

/*const testRoute = 'C:/Users/caroo/Desktop/Laboratoria/DEV011-md-links';
console.log(`Is "${testRoute}" an absolute path? ${isAbsolutePath(testRoute)}`);
console.log(`Converted absolute path: ${convertAbsolute(testRoute)}`);*/

module.exports = {
  isAbsolutePath,
  convertAbsolute,
};