import { add, divide, multiply, subtract } from './operations';

function solveList(list) {
    while (list.includes('/')) {
        let operationIndex = list.indexOf('/');
        let result = divide(list[operationIndex - 1], list[operationIndex + 1]);
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('x')) {
        let operationIndex = list.indexOf('x');
        let result = multiply(
            list[operationIndex - 1],
            list[operationIndex + 1]
        );
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('-')) {
        let operationIndex = list.indexOf('-');
        let result = subtract(
            list[operationIndex - 1],
            list[operationIndex + 1]
        );
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('+')) {
        let operationIndex = list.indexOf('+');
        let result = add(list[operationIndex - 1], list[operationIndex + 1]);
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }

    return list[0];
}

export default solveList;