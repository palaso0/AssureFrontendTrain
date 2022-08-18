import { useDispatch } from "react-redux";
import { concatNumberKey } from "../features/calculator/calculator-slice";

function NumberKey (props) {

    const dispatch = useDispatch();

    const pressKey = () => {
        dispatch(concatNumberKey(props.number))
    }

    return (
        <div 
        className="key-number box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center cursor-pointer"
        value={props.number}
        onClick={pressKey}>
            {props.number}
        </div>
    )
}

export default NumberKey;