const { validateLinks } = require("../src/function.js");
const mdLinks = require("../src/index.js");
// jest.mock("../src/index.js");

describe("validateLinks", () => {
    it('Debe validar el href y resolver el objeto', ()=>{
        const link = 'https://example.com'
        expect(validateLinks(link)).resolves.toEqual({
            href: link,
            status: 200,
            ok: 'ok'
          })
    }) 
    it('Debe validar el href y rechazar el error', ()=>{
        const link = 'htt:/example.com'
        expect(validateLinks(link)).rejects.toThrow('not supported')
    }) 
//   it("debe llamar correctamente a la funcion validateLinks con los links", () => {
//     const link = [
//       {
//         href: "https://example.com",
//         text: "Example",
//       },
//     ];
//     mdLinks(link);
//     expect(mdLinks).toHaveBeenCalled();
//     expect(mdLinks).toHaveBeenCalledTimes(link.length); 
//     expect(mdLinks).toHaveBeenCalledWith([
//       { href: "https://example.com", text: "Example" },
//     ]);
//   });

//   it("debe devolver el resultado de validacion", () => {
//     const links = [{ href: "https://example.com", text: "Example" }];
//     mdLinks.mockImplementation((link) => {
//       const result = mdLinks(links);
//       if (link === "https://example.com") {
//         return [{ href: "https://example.com", text: "Example", status: 200 }];
//       }
//       expect(result).toEqual([
//         { href: "https://example.com", text: "Example", status: 200 },
//       ]);
//     });
//   });

//   it("debe manejar errores correctamente", () => {
//     const links = [{ href: "https://ejemplo.com/1" }];

//     const errorMessage = "Error al validar enlaces";

//     mdLinks.mockRejectedValue(new Error(errorMessage));

//     expect(mdLinks(links)).rejects.toThrow(errorMessage);
//     expect(mdLinks).toHaveBeenCalledTimes(2); // Verificar que se llamó validateLinks una vez
//   });
});
