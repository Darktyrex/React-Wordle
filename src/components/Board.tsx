import { useAppSelector } from "../hooks/useAppSelector"
import WordBox from "./WordBox"

const Board = () => {
  const {board} = useAppSelector(state => state.game)
  return (
    <div className="">
        <div className="w-64 mt-4 mx-auto grid grid-rows-5 grid-cols-5 items-center justify-items-center gap-2">
            {
                board.map((value, index) => <WordBox key={`box${index}`} status={value.status} letter={value.letter}/>)
            }
        </div>
    </div>
  )
}

export default Board