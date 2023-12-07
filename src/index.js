const { isAbsolutePath,
 convertAbsolute,
verifyPathExistence,
isItMarkdown,
readingFile,
linksExtract,
validateLinks,
} = require ('./function.js'); 

const mdLinks = (path,validate) => {
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

    if (validate) {
      // Si el parámetro 'validate' es true, validar los enlaces
      validateLinks(extractedLinks)
        .then((validatedLinks) => resolve(validatedLinks))
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

//testeo de que la promesa esté funcionando

// const myPath = 'docs/04-milestone';

// mdLinks(myPath)
//   .then((result) => {
//     console.log('Resultado exitoso:', result);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

mdLinks('docs/05-milestone.md', true)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });