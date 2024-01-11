const { validateLinks, fileExist } = require('../functions.js');

describe('validateLinks', () => {
    const arrayLinks = [
        {
            href: 'https://translate.google.com/?hl=es',
            text: 'Translate google',
            file: 'C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md'
        },
        {
            href: 'https://www.google.com/hola',
            text: 'Google Broken',
            file: 'C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md'
        }
    ]
    it('Debe devolver arreglo con links validados', () => {
        //validateLinks(arrayLinks).then((res) => {
        // expect(res).toEqual(
        //   [{ "file": "C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md", "href": "https://translate.google.com/?hl=es", "status": 200, "statusText": "OK", "text": "Translate google" }, { "file": "C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md", "href": "https://www.google.com/hola", "status": 404, "statusText": "fail", "text": "Google Broken" }]
        // );
        // });
        return expect(validateLinks(arrayLinks)).resolves.toEqual([{ "file": "C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md", "href": "https://translate.google.com/?hl=es", "status": 200, "statusText": "OK", "text": "Translate google" }, { "file": "C:\\Users\\luisa\\Documents\\Repositorio-Md-links\\DEV011-md-links\\docs\\documento-prueba.md", "href": "https://www.google.com/hola", "status": 404, "statusText": "fail", "text": "Google Broken" }]);

    });
});

describe('fileExist', () => {
    it('Debe devolver la ruta, si existe', () => {
        return expect(fileExist('C:/Users/luisa/Documents/Repositorio-Md-links/DEV011-md-links/docs/05-milestone.md')).resolves.toBe('C:/Users/luisa/Documents/Repositorio-Md-links/DEV011-md-links/docs/05-milestone.md');
    });
      
});