const { mdLinks } = require('../');

describe('mdLinks', () => {

  it('Debe rechazar cuando el archivo no es Markdown o no existe', () => {
    return mdLinks('/rutanoexiste.md').catch((err) => {
      expect(err).toBe('el archivo no es Md o no existe');
    });
  });

  it('Debe mostrar un arreglo de longitud 6', () => {
    return expect(mdLinks('docs/documento-prueba.md')).resolves.toHaveLength(6);
  })

  it('Debe mostrar que el archivo tiene 6 links total, 6 unique, 2 rotos', () => {
    return expect(mdLinks('docs/documento-prueba.md',true,true)).resolves.toEqual({ total: 6, linksUnique: 6, linksFail: 2 });
  })  
});

