const mdLinks = require('../src/index.js');
const axios = require('axios');


describe('mdLinks', () => {

  it('should return a promise', () => {
    expect(mdLinks('docs/05-milestone.md')).toBeInstanceOf(Promise);
});
  });

  
  jest.mock('axios');// usar spy on

 


