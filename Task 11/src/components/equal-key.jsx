import { useDispatch } from "react-redux";
import { solverOperation } from "../features/calculator/calculator-slice";

function EqualKey () {
    const dispatch = useDispatch();

    return (
        <div 
        onClick={() => dispatch(solverOperation())}
        id="equal" 
        className="box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-green-200 cursor-pointer">
            =
        </div>
    )
}

export default EqualKey;