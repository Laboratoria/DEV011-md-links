const { isAbsolutePath, convertAbsolute } = require('./functions.js')


function mdLinks(path) {
  return new Promise((resolve, reject) => {
    //Lamado de las funciones del archivo functions.js
    console.log(path);
    const rutaConvertida = convertAbsolute(path)
    resolve(rutaConvertida)
  })
}


module.exports = {
  mdLinks
};
