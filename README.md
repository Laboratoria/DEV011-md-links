# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)
* [4. Instalación y uso](#4-instalación_y_uso)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en
muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, etc.) y
es muy común encontrar varios archivos en ese formato en cualquier tipo de
repositorio (empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

![md-links](https://github.com/Laboratoria/curriculum/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4)

## 2. Resumen del proyecto

En este proyecto desarrollé una librería en Node.js que funciona como
herramienta para analizar links dentro de archivos Markdown. Esta librería
está disponible como un módulo publicado en GitHub, que las
usuarias podrán instalar e importar en otros proyectos, y como una interfaz
de línea de comandos (CLI) que permitirá utilizar la librería directamente
desde el terminal.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos permite ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

## 3. Consideraciones técnicas

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) están implementados en JavaScript para ser ejecutados con
  Node.js.

* Los **tests unitarios** cubren más del 70% de _statements_,
  _functions_, _lines_ y _branches_. Y se usó [Jest](https://jestjs.io/)
  para estas pruebas unitarias.

* Para este proyecto se utilizó los módulos CommonJS
  o ES Modules. Los módulos CommonJS usan la síntaxis `require` y es el formato
  de módulos original de Node.js.

* Para este proyecto se usó la función asíncrona `readFile` para leer el archivo y la versión síncrona de la función `readdirSync` para leer directorios.

## 4. Instalación y uso

Para instalar este módulo debes usar el comando `npm i lucast-md-links`en la terminal.

Para extraer los links debes usar el comando `node cli.js 'ruta_del_archivo'` con la ruta relativa o absoluta del archivo. 

Si incluyes la opción --validate `node cli.js 'ruta_del_archivo' --validate` te muestra el arreglo con los links validados. 

Si incluyes la opción --stats `node cli.js 'ruta_del_archivo' --stats` te muestra la cantidad total de links y la cantidad de links únicos. 

Y si incluyes la opción --validate y --stats `node cli.js 'ruta_del_archivo' --validate --stats` te muestra la cantidad total de links, la cantidad de links únicos y la cantidad de links rotos.

### Descripción de los archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso.
* `functions.js`: En este archivo se encuentran las funciones necesarias para la función (`mdLinks`).
* `index.js`: Desde este archivo se exportar la función (`mdLinks`).
* `cli.js`: En este archivo se importa la función (`mdLinks`) y se consume la promesa para mostrar los resultados con los argumentos suministrados por el usuario.
* `package.json` con nombre, versión, descripción, autor, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint.
* `.gitignore` para ignorar `node_modules` y otros directorios que no se
  incluyen en control de versiones (`git`).
* `test/md-links.spec.js` contiene los tests unitarios para la función
  `mdLinks()`.
* `test/functions.spec.js` contiene los tests unitarios para la funciones puras.  
