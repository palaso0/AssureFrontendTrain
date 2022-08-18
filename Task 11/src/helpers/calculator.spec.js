import solveList from './calculator.js';

describe('Solve List', () => {
    it('should solve an array list', () => {
        let arrayList = [1, '+', 2, 'x', 5];
        expect(solveList(arrayList)).toEqual(11.0);
    });
    it('should return a number', () => {
        let arrayList = [1, '+', 2, 'x', 5];
        expect(typeof solveList(arrayList)).toBe('number');
    });
});
