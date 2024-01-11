const path = require('path');
const fs = require('fs');
const marked = require('marked');
const { JSDOM } = require('jsdom');
const axios = require('axios');

const convertAbsolute = (route) => {
    return path.isAbsolute(route) ? route : path.resolve(route)
}

const fileExist = (route) => {
    const promise = new Promise((resolve, reject) => {
        fs.access(route, fs.constants.F_OK, (err) => {
            if (err) {
                reject(`El archivo ${route} no existe.`);

            } else {
                resolve(route);
            }
        });

    });
    return promise;
}

const isFileMd = (route) => {
    const extensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    return extensions.includes(path.extname(route))
}

const routeExist = (route) => {
    return fs.existsSync(route)
}

const readFile = (route) => {
    const promiseRead = new Promise((resolve, reject) => {
        fs.readFile(route, 'utf8', (err, data) => {
            if (err) {
                reject(`El archivo ${route} no se puede leer`);
            }
            resolve(data);
        })
    })
    return promiseRead;
}

const linksExtract = (data, route) => {
    const dom = new JSDOM(marked.parse(data));
    const linksExtracted = [];
    dom.window.document.querySelectorAll(" a ").forEach((element) => {
        if (element.href.includes('https:')) {
            linksExtracted.push(
                {
                    href: element.href,
                    text: element.textContent,
                    file: route,
                }
            );
        }
    });
    return linksExtracted;
}

const validateLinks = (arrayObjects) => {
    const arrayMap = arrayObjects.map((element) => {
        return axios.get(element.href)
            .then((res) => {
                return {...element,status:res.status ,statusText:res.statusText}
            })
            .catch((err) => {
                const status = !err.response ? 0 : err.response.status
                return {...element,status,statusText:'fail'}
            })
    })
    return Promise.all(arrayMap);
}

module.exports = {
    convertAbsolute,
    fileExist,
    isFileMd,
    routeExist,
    readFile,
    linksExtract,
    validateLinks,
}

