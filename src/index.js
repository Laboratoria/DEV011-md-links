const { 
isAbsolutePath,
convertAbsolute,
verifyPathExistence,
isItMarkdown,
readingFile,
linksExtract,
validateLinks,
statsFunction,
validateStats,
} = require ('./function.js'); 

const mdLinks = (path, validate, stats) => {
return new Promise((resolve, reject) => {
  const validatedPath = isAbsolutePath (path) ? path : convertAbsolute(path);

  if (!verifyPathExistence(validatedPath)) {
    reject("Error: la ruta no existe.");
    return;
  }

  if (!isItMarkdown(validatedPath)) {
    reject("Error: no es un archivo Markdown.");
    return;
  }
 
  readingFile(validatedPath)
  .then((content) => {
    const extractedLinks = linksExtract(content, validatedPath);

    if (stats) {
      resolve(statsFunction(extractedLinks))
    }

    if (validate) { 
      validateLinks(extractedLinks)
        .then((validatedLinks) => {
          if (stats) {
            const statsObj = statsFunction(validatedLinks)
            const validatestatsObj = validateStats(validatedLinks)
            const complete = {...statsObj, ...validatestatsObj}
            console.log({complete});
          }
          resolve(validatedLinks)
        })
        .catch((error) => reject(`Error al validar los enlaces: ${error.message}`));
    } else {
      resolve(extractedLinks);
    }
  })
  .catch((error) => {
    reject(`Error al leer el archivo: ${error.message}`);
  });
});
};
module.exports = mdLinks;