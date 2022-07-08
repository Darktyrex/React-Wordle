import { KeyboardEvent, useEffect } from "react"
import Board from "../components/Board"
import Header from "../components/Header"
import Keyboard from "../components/Keyboard"
import { getNewWord } from "../helpers/getNewWord"
import { useAppDispatch } from "../hooks/useAppDispatch"
import useWordHandler from "../hooks/useWordHandler"
import { newWord } from "../store/game/gameSlice"
import { changeInstructions } from "../store/ui/uiSlice"

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(newWord(getNewWord()));
  }, [])
  useEffect(() => {
    if (!localStorage.getItem("former-user")) {
      dispatch(changeInstructions(true))
      localStorage.setItem("former-user", "not the first time");
    }
  }, [])

  const [handleWordBox] = useWordHandler();

  const handleKeyDown = (e:KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    handleWordBox(key)
  }

  return (
    <div tabIndex={0} onKeyDown={(e)=>handleKeyDown(e)} className="w-full min-h-screen p-3 bg-white-100 dark:bg-dark-100 text-lg sm:text-sm dark:text-white-100 focus:outline-0 relative">
        <div className="container mx-auto sm:w-3/4 md:w-96">
          <Header />
          <Board />
          <Keyboard />
        </div>
    </div>
  )
}

export default Home