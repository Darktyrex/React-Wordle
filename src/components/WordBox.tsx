import getStatus from "../helpers/getStatus"
import {BoxState} from "../interfaces/BoxState"

const WordBox = ({letter, status = "unchecked"}:BoxState) => {
    const getColor = getStatus(status)
    return (
        <div className={`flex justify-center align-middle w-12 h-12 text-white-100 text-xl ${getColor} rounded`}>
            <span className="self-center">
                {letter}
            </span>    
        </div>
    )
}

export default WordBox