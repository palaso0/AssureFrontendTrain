import { useDispatch } from "react-redux";

import { addOperation } from "../features/calculator/calculator-slice";

function OperationKey (props) {
    let dispatch = useDispatch();
    return (
        <div
            onClick={() => dispatch(addOperation(props.operation))}
            className="key-operation box-border border-gray-600 h-8 w-[74px] p-4 border-2 flex items-center justify-center bg-gray-200 cursor-pointer"
            value={props.operation}>
            {props.operation}
        </div>
    )
}

export default OperationKey;