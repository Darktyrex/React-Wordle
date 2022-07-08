import getStatus from "../helpers/getStatus"
import useWordHandler from "../hooks/useWordHandler"

interface Props {
    children: string,
    className?: string,
}

const KeyboardButton = ({children, className}:Props) => {

  const [handleWordBox] = useWordHandler();
  const handleClick = () => {
    let tries ="";
    if (children === "⇦") {
      tries = "Backspace";
    }else if (children === "↩"){
      tries = "Enter";
    }else{
      tries = children
    }
    handleWordBox(tries);
  }

  return (
    <button onClick={()=>handleClick()} className={`w-auto h-6 p-1 ${getStatus("unchecked")} ${className} `}>
        <span className="block mx-2 text-xs">
            {children}
        </span>
    </button>
  )
}

export default KeyboardButton