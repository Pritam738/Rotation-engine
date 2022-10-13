let { listMatrixConversion, rotatematrix, isSquare }  = require('../helper')

describe('Testing various helper functions', () => {
    test('if value is a perfect square', () => {
      expect(isSquare(9)).toBe(true);
    });

    test('if value is not a perfect square', () => {
        expect(isSquare(7)).toBe(false);
    });

    test('if no value is provided', () => {
        expect(isSquare()).toBe(false);
    });

    test('check is list is converted to square matrix', () => {
        let arr = [4,1,2,7,5,3,8,9,6]
        expect(listMatrixConversion(arr,Math.sqrt(arr.length)).length).toBe(Math.sqrt(arr.length));
    });

    test('check square matrix rotation', () => {
        let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
        expect(rotatematrix(arr)).toEqual([4,1,2,7,5,3,8,9,6]);
    });
});