const { mdLinks } = require('./index.js')

const validateLinks=process.argv.includes('--validate')
const ruta=process.argv[2]


mdLinks(ruta)
  .then(res => console.log('Respuesta', res))
  .catch(err => console.log('Error',err))