const { isAbsolutePath, convertAbsolute } = require ('./function'); 

const mdLinks = (path) => {
return new Promise((resolve, reject) => {
  const validatePath = isAbsolutePath (path) ? path : convertAbsolute(path);
  console.log(validatePath)
  resolve (validatePath);
});
};

module.exports = { mdLinks };