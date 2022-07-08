import { ChangeEvent, MutableRefObject, useEffect, useRef } from "react"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { changeDarkMode, changeInstructions, changeScore } from "../store/ui/uiSlice"

const Header = () => {
    const dispatch = useAppDispatch()
    const button = useRef() as MutableRefObject<HTMLInputElement>
    useEffect(() => {
        dispatch(changeDarkMode(localStorage.getItem("darkMode")==="true"?true:false));
        button.current.checked = (localStorage.getItem("darkMode")==="true"?true:false);
    }, [])
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.target.checked?dispatch(changeDarkMode(true)):dispatch(changeDarkMode(false));
        localStorage.setItem("darkMode", e.target.checked?"true":"false");
    }
    const handleInstructions = () => {
        dispatch(changeInstructions(true))
    }
    const handleScore = () => {
        dispatch(changeScore(true))
    }
    
  return (
    <div className='flex justify-between align-middle w-full h-14 bg-white-300 dark:bg-dark-300 rounded-2xl'>
            <div className="h-full basis-1/4 flex justify-center items-center">
                <button onClick={handleInstructions} className="w-7 h-7 p-1 font-bold text-white-100 dark:text-dark-100 bg-gray-500 dark:bg-gray-100 rounded-full">
                    ?
                </button>
            </div>
            <h1 className="basis-1/2 my-4 text-2xl font-bold text-center">WORDLE</h1>
            <div className="mr-3 basis-1/4 flex justify-end items-center gap-2 ">
                <button onClick={handleScore} className="w-7 h-6 p-1 font-bold text-xs text-white-100 dark:text-dark-100 bg-gray-500 dark:bg-gray-100 rounded-md">
                    |||
                </button>
                <label className="inline-flex relative items-center cursor-pointer">
                    <input ref={button} onChange={(e) => handleChange(e)} type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
          </div>
  )
}

export default Header