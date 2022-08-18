import { createSlice } from '@reduxjs/toolkit';
// helpers
import solveList from '../../helpers/calculator';

const initialState = {
    operation: '',
    display: '0',
    operationList: []
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        concatNumberKey: (state, { payload }) => {
            if (state.display === '0') {
                state.display = '';
            }
            state.operation += payload;
            state.display += payload; 
        },
        addOperation: (state, { payload }) => {
            state.operationList = [
                ...state.operationList,  
                parseFloat(state.operation),
                ...payload
            ];
            state.operation = '';
            state.display += payload;
            console.log('lista: ', state.operationList);
        },
        clearOperation: (state) => {
            state.operation = '';
            state.display = '0';
            state.operationList = [];
        },
        solverOperation: (state) => {// 1+2 -3 =
            state.operationList = [
                ...state.operationList,
                parseFloat(state.operation)
            ];
            state.display = solveList(state.operationList);
        }
    }
});

export const {
    concatNumberKey,
    addOperation,
    clearOperation,
    solverOperation
} = calculatorSlice.actions;

export const selectDisplayOperation = (state) => state.calculator.display;

export default calculatorSlice.reducer;
