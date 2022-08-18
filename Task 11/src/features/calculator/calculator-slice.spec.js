import calculatorReducer, {
    concatNumberKey,
    addOperation,
    clearOperation,
    solverOperation
} from './calculator-slice';

describe('calculator reducer', () => {
    const initialState = {
        operation: '',
        display: '0',
        operationList: []
    };

    it('should handle initial state', () => {
        expect(calculatorReducer(undefined, { display: '0', operation: '' })).toEqual({
						operationList: [],
            display: '0',
						operation: ''
        });
    });

    it('should handle concat number', () => {
			let actual = calculatorReducer(initialState, concatNumberKey("2"));
      expect(actual.operation).toEqual("2");
    });

		it('should handle display operation', () => { 
			let actual = calculatorReducer(initialState, addOperation("+"));
			expect(actual.operationList).toEqual([NaN, "+"]);
    }); // [NaN, "+"]

		it('should handle operation list', () => {
			let actual = calculatorReducer(initialState, solverOperation("="));
			expect(actual.operationList).toEqual([NaN]);
    }); // [NaN, "+"]

		it('should handle clear', () => {
			let actual = calculatorReducer(initialState, clearOperation());
			expect(actual.display).toEqual("0");
    }); // [NaN, "+"]

    // it('should handle decrement', () => {
    //   const actual = counterReducer(initialState, decrement());
    //   expect(actual.value).toEqual(2);
    // });

    // it('should handle incrementByAmount', () => {
    //   const actual = counterReducer(initialState, incrementByAmount(2));
    //   expect(actual.value).toEqual(5);
    // });
});
