import { keyboardMap } from "../data/keyboardMap"
import KeyboardButton from "./KeyboardButton"

const Keyboard = () => {
    const justifyButtons = (index:number) => {
        if (index < 10) {
            return "justify-self-center"
        }else if(index >= 10 && index < 20){
            return "justify-self-end"
        }else {
            return "justify-self-start"
        }
    }
    
  return (
    <div className="mt-4 p-3 bg-gray-400 dark:bg-dark-300 grid grid-rows-3 grid-cols-10 gap-2 rounded-2xl">
        {
            keyboardMap.map((letter, i)=> <KeyboardButton key={`button${letter}`} className={
                justifyButtons(i) 
            }>{letter}</KeyboardButton>)
        }
    </div>
  )
}

export default Keyboard