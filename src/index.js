const { absolutePath, validar, obtenerEnlacesMarkdown, validateLinks } = require("./function");

const mdLinks = (path, validate, stats) => {
  return new Promise((resolve, reject) => {
    const absoluteFilePath = absolutePath(path);

    if (!validar(absoluteFilePath)) {
      reject(new Error("La ruta no existe"));
    } else {
      obtenerEnlacesMarkdown(absoluteFilePath)
        .then((links) => {
          if (stats) {
            const totalLinks = links.length;
            const uniqueLinks = [...new Set(links.map((link) => link.href))].length;

            if (validate) {
              const linkPromises = links.map((linkObj) => {
                return validateLinks(linkObj.href) // Validar cada enlace
                  .then((validatedLink) => {
                    return { ...linkObj, ...validatedLink };
                  })
                  .catch((error) => {
                    return { ...linkObj, ok: 'fail' }; // Marcar enlace como fallido
                  });
              });

              Promise.all(linkPromises)
                .then((validatedLinks) => {
                  const combinedLinks = validatedLinks;
                  const failedLinks = combinedLinks.filter(link => link.ok === 'fail');
                  const statistics = {
                    total: totalLinks,
                    unique: uniqueLinks,
                    broken: failedLinks.length // Contar enlaces rotos
                  };
                  resolve(statistics);
                })
                .catch((error) => {
                  reject(error);
                });
            } else {
              const statistics = {
                total: totalLinks,
                unique: uniqueLinks
              };
              resolve(statistics);
            }
          } else if (validate) {
            const linkPromises = links.map((linkObj) => {
              return validateLinks(linkObj.href); // Validar cada enlace
            });

            Promise.all(linkPromises)
              .then((validatedLinks) => {
                const combinedLinks = links.map((linkObj, index) => {
                  return { ...linkObj, ...validatedLinks[index] };
                });
                resolve(combinedLinks);
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            resolve(links);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

module.exports = mdLinks;
