const { mdLinks } = require('./index.js')

const ruta=process.argv[2];
const validateLink=process.argv.includes('--validate');
const stats=process.argv.includes('--stats');

mdLinks(ruta,validateLink,stats)
  .then(res => console.log('Respuesta', res))
  .catch(err => console.log('Error',err))