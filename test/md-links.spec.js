const mdLinks = require("../src/index.js");
const path = "./test/prueba.md";
const https = require('https');

jest.mock('https');

describe("mdLinks", () => {
  it("Debe devolver una promesa", () => {
    expect(mdLinks("./README.md")).toBeInstanceOf(Promise);
  });

  it("Debe rechazar cuando la ruta no existe", () => {
    return mdLinks(
      "C:/Users/Documents/Documentos Maria Paula/DEV011-md-links/NOEXISTE.md"
    ).catch((error) => {
      expect(error.message).toMatch(/la ruta no existe/i); //la i verifica el error sin tener en cuenta las mayusculas y las minusculas
    });
  });

  it("Debe devolver un array", () => {
    const filePath = "READMEPRUEBA.md";
    return mdLinks(filePath).then((links) => {
      expect(links).toBeDefined();
      expect(Array.isArray(links)).toBe(true);
    });
  });
});

// jest.mock("../src/index.js");

describe("md-Links es una funcion", () => {
  it("debe validar los links con la opción validate true", (done) => {
    const links = [
      {
        href: 'https://example.com',
        text: 'Example',
        file: 'C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md',
        status: 200,
        ok: 'ok'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md',
        status: 307,
        ok: 'ok'
      }
    ];
    // mdLinks(path, true);
    // expect(mdLinks).toHaveBeenCalled();
    // expect(mdLinks).toHaveBeenCalledTimes(link.length);
    // expect(mdLinks).toHaveBeenCalledWith([
    //   { href: "https://example.com", text: "Example" },
    // ]);

    expect(mdLinks(path, true)).resolves.toEqual(links);
    done();
  });
  it("debe validar los links con la opción validate false", (done) => {
    const links = [
      {
        href: "https://example.com",
        text: "Example",
        file: "C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md",
      },
      {
        file: "C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md",
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
      },
      {
        file: "C:\\Users\\juan_\\Documents\\Documentos Maria Paula\\DEV011-md-links\\test\\prueba.md",
        href: "https://nodejs.org/",
        text: "Node.js",
      },
    ];
    // mdLinks(path, true);
    // expect(mdLinks).toHaveBeenCalled();
    // expect(mdLinks).toHaveBeenCalledTimes(link.length);
    // expect(mdLinks).toHaveBeenCalledWith([
    //   { href: "https://example.com", text: "Example" },
    // ]);

    expect(mdLinks(path, false)).resolves.toEqual(links);
    done();
  });
});
