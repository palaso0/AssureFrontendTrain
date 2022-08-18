import { useDispatch } from "react-redux";
import { clearOperation } from "../features/calculator/calculator-slice";


function ClearKey (props) {
    const dispatch = useDispatch();
    return (
        <div 
        className="box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-red-200 cursor-pointer" 
        onClick={() => dispatch(clearOperation())}>
            C
        </div>
    )
}

export default ClearKey;