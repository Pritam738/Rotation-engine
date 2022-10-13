let verifyInputParams = require('../index')

describe('Testing for CMD line parameters', () => {
    test('check when less than two CMD line parametrs are provided', () => {
      expect(verifyInputParams(['input.csv'])).toBe(false);
    });
  
    test('check when more than two CMD line parametrs are provided', () => {
      expect(verifyInputParams(['input.csv','input1.csv','input2.csv'])).toBe(false);
    });

    test('check for valid file Names in the CMD line parameters', () => {
        expect(verifyInputParams(['input.csv','input.jpg'])).toBe(false);
    });

    test('check for valid file Names in the CMD line parameters', () => {
        expect(verifyInputParams(['input.csv','output.csv'])).toBe(true);
    });

});