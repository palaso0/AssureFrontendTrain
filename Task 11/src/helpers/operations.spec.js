
import { add, subtract, multiply, divide } from './operations';
describe('Solve Operations', () => {
    it('should solve add operation: 2+2 = 4', () => {
        expect(add(2,2)).toEqual(4);
    });
    it('should solve multiply operation: 2*2 = 4', () => {
        expect(multiply(2,2)).toEqual(4);
    });
    it('should solve divide operation: 2/2 = 1', () => {
        expect(divide(2,2)).toEqual(1);
    });
    it('should solve subtract operation: 2-2 = 0', () => {
        expect(subtract(2,2)).toEqual(0);
    });
});
