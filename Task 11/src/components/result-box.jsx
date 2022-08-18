function ResultBox (props) {
    return (
        <div className="box-border border-gray-600 h-16 w-80 p-4 border-2 flex justify-end">
            <span id="result" className="text-2xl" value="0">{ props.result }</span>
        </div>
    )
}

export default ResultBox;