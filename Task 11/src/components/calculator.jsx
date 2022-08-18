import { useSelector } from 'react-redux';

import { 
    selectDisplayOperation
} from "../features/calculator/calculator-slice";

import NumberKey from "./number-key";
import OperationKey from "./operation-key";
import ClearKey from "./clear-key";
import EqualKey from "./equal-key";
import ResultBox from "./result-box";

function Calculator() {
    const result = useSelector(selectDisplayOperation);

    return (
        <div className="flex justify-center flex-wrap">
            <div className="mt-8 w-80">
                <ResultBox result={result} />
                <div className="flex justify-end mt-2">
                    <ClearKey/>
                </div>
                
                <div className="flex justify-end flex-wrap gap-2 mt-2">
                    <NumberKey number="7" />
                    <NumberKey number="8" />
                    <NumberKey number="9" />
                    <OperationKey operation="/"/>
                    
                    <NumberKey number="4" />
                    <NumberKey number="5" />
                    <NumberKey number="6" />
                    <OperationKey operation="x"/>
                    <NumberKey number="1" />
                    <NumberKey number="2" />
                    <NumberKey number="3" />
                    
                    <OperationKey operation="-"/>

                    <NumberKey number="0" />
                    
                    <NumberKey number="." />
                    <EqualKey />
                    <OperationKey operation="+"/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;