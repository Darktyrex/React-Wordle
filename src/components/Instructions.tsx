import { useAppDispatch } from "../hooks/useAppDispatch";
import { changeInstructions } from "../store/ui/uiSlice";
import WordBox from "./WordBox"

const exampleWords:string[] = ["gatos", "vocal", "canto"];

const Instructions = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(changeInstructions(false))
    }
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center bg-white-100 dark:bg-dark-200">
        <div className="m-auto w-full sm:w-3/4 md:w-96 p-3 bg-white-300 dark:bg-dark-200 sm:border border-black dark:border-gray-600 rounded text-lg sm:text-sm dark:text-white-100">
            <div className="container">
                <h2 className="my-3 text-3xl sm:text-lg font-bold text-center">Cómo jugar</h2>
                <p>Adivina la palabra oculta en cinco intentos. <br />Cada intento debe ser una palabra válida de 5 letras. <br />Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                <h4 className="font-bold">Ejemplos</h4>
                <div className="flex justify-center gap-2">
                    {exampleWords[0].toLocaleUpperCase().split("").map(letter =><WordBox key={`letter${letter}1`} status={`${letter ==="G"?"correct-spot":"unchecked"}`} letter={letter}/>)}
                </div>
                <p className="my-3">La letra <b>G</b> está en la palabra y en la posición correcta.</p>
                <div className="flex justify-center gap-2">
                    {exampleWords[1].toLocaleUpperCase().split("").map(letter =><WordBox key={`letter${letter}2`} status={`${letter ==="C"?"wrong-spot":"unchecked"}`} letter={letter}/>)}
                </div>
                <p className="my-3">La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
                <div className="flex justify-center gap-2">
                    {exampleWords[2].toLocaleUpperCase().split("").map(letter =><WordBox key={`letter${letter}3`} status={`${letter ==="O"?"any-spot":"unchecked"}`} letter={letter}/>)}
                </div>
                <p className="my-3">La letra <b>O</b> no está en la palabra.</p>
                <p className="my-3">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
                <p className="text-center">¡Una palabra nueva cada 5 minutos!</p>
                <button onClick={handleClick} className="block w-full sm:w-10/12 md:w-1/2 lg:w-60 h-12 mx-auto mt-4 bg-green rounded text-white-100">¡JUGAR!</button>
            </div>
        </div>
    </div>
  )
}

export default Instructions