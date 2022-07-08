import { getNewWord } from "../helpers/getNewWord";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { newWord, restart } from "../store/game/gameSlice";
import { changeScore } from "../store/ui/uiSlice";

const Score = () => {
    const {tries,victories} = useAppSelector(state => state.score);
    const {currentWord, gameOver} = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(changeScore(false));
        console.log(gameOver);
        if (!gameOver) {
            dispatch(restart());
            dispatch(newWord(getNewWord()));
            console.log("s");
        }
    }
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex justify-center items-center">
        <div className="m-auto w-full sm:w-3/4 md:w-72 p-3 bg-white-300 dark:bg-dark-200 sm:border border-black dark:border-gray-600 rounded text-lg sm:text-sm dark:text-white-100">
            <div className="container text-center">
                <h2 className="my-4 text-3xl sm:text-2xl font-bold text-center">Estadísticas</h2>
                <div className="flex mt-8">
                    <div className="w-full">
                        <h4 className="font-bold text-xl">{tries}</h4>
                        <p className="my-3">Jugadas</p>
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-xl">{victories}</h4>
                        <p className="my-3">Victorias</p>
                    </div>
                </div>
                {
                   !gameOver && <p className="my-3">La palabra era <b className="font-bold">{currentWord.toLocaleUpperCase()}</b></p>
                }
                <p className="my-3">SIGUIENTE PALABRA</p>
                <p className="font-bold">04:10</p>
                <button onClick={handleClick} className="block w-full sm:w-10/12 md:w-1/2 lg:w-60 h-12 mx-auto mt-4 bg-green rounded text-white-100">Aceptar</button>
            </div>
        </div>
    </div>
  )
}

export default Score