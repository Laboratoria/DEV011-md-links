const { isAbsolutePath, 
convertAbsolute,
verifyPathExistence,
isItMarkdown,
validateLinks,
 } = require ('../src/function.js');

describe ("isAbsolutePath", () => {
it(" should check if the route is absolute", () => {
const isAbsoluteResult = isAbsolutePath('C:/Users/caroo/Desktop/Laboratoria/DEV011-md-links/docs/04-milestone.md');
expect (isAbsoluteResult).toBe (true);
});
it("should check if the route is relative", () => {
    const isAbsoluteResult = isAbsolutePath('docs/04-milestone.md');
    expect(isAbsoluteResult).toBe(false);
  });
});

describe ("convertAbsolute", () => {
  it("convert the relative path into absolute", () => {
    const convertedPath = convertAbsolute('docs/01-milestone.md');
    expect(convertedPath).toBe('C:\\Users\\caroo\\Desktop\\Laboratoria\\DEV011-md-links\\docs\\01-milestone.md');
  });
});

describe ("verifyPathExistence", () => {
  it ("the link's path exists", () => {
    const pathExists = verifyPathExistence('docs/03-milestone.md');
    expect(pathExists).toBe(true)
  });
});
describe ("isItMarkdown?",() => {
  it("the extensions are part of a Markdown file", () => {
   const itIsMarkdown = isItMarkdown ('docs/02-milestone.md');
   expect(itIsMarkdown).toBe(true)  
  });
});

// describe("validateLinks", () => {
//   it("return true if the links are valid, including an array",() => {
//     const valid
//   })
// })