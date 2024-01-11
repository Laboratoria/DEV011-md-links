const { convertAbsolute, isFileMd, fileExist, routeExist, readFile, linksExtract, validateLinks } = require('./functions.js')

function mdLinks(path, validate, stats) {
  return new Promise((resolve, reject) => {
    //Lamado de las funciones del archivo functions.js
    const routeAbsolute = convertAbsolute(path)
    const fileMd = isFileMd(routeAbsolute)
    const fileExist = routeExist(routeAbsolute)
    if (!fileMd || !fileExist) {
      reject('el archivo no es Md o no existe')
    } else {
      const document = readFile(routeAbsolute)
      document.then((result) => {
        const arrayLinks = linksExtract(result, routeAbsolute);
        const total = arrayLinks.length;
        if (stats && !validate) {
          const arrayLinksUnique = [...new Set(arrayLinks.map(link => link.href))];
          const linksUnique = arrayLinksUnique.length;
          resolve({ total, linksUnique });
        } else if (!stats && validate) {
          const arrayLinksValidated = validateLinks(arrayLinks)
          resolve(arrayLinksValidated)
        } else if (!stats && !validate) {
          resolve(arrayLinks)
        } else if (stats && validate) {
          const arrayLinksValidated = validateLinks(arrayLinks)
          const arrayLinksUnique = [...new Set(arrayLinks.map(link => link.href))];
          const linksUnique = arrayLinksUnique.length;
          arrayLinksValidated.then(links => {
            const arraylinksFail = links.filter((link) => link.statusText === 'fail');
            const linksFail=arraylinksFail.length;
            resolve({total,linksUnique,linksFail});
          })
        }
      }).catch((err) => {
        reject(err)
      })

    }
  })
}
module.exports = {
  mdLinks
};
