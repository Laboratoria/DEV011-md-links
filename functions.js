const path = require('path');

//const isAbsolutePath = (route) => path.isAbsolute(route)

const convertAbsolute = (route) => {
    return path.isAbsolute(route) ? route : path.resolve(route)
}
//console.log(convertAbsolute('DEV011-md-links/docs/04-milestone.md'));



module.exports = {
    convertAbsolute
}

