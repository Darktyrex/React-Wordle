import { deleteLetter, matchWords, restart, setCurrentry, setGameOver, setLetter } from "../store/game/gameSlice";
import { addTry, addVictory } from "../store/score/scoreSlice";
import { changeScore } from "../store/ui/uiSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useWordHandler = () => {
  const dispatch = useAppDispatch();
  const {board, currentWord, currentBox, gameOver, currentTry} = useAppSelector(state => state.game);
  
  const currentLetters = currentWord.toLocaleUpperCase().split("").map( letter =>{
      const specialCharacters:any = {'Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
      return specialCharacters[letter] || letter
  })
  const handleWordBox = (key: string) => {
    if(gameOver){return}
    if (key === "Enter") {
      if(currentBox === 5  && currentTry === 0 || 
         currentBox === 10 && currentTry === 1 ||
         currentBox === 15 && currentTry === 2 ||
         currentBox === 20 && currentTry === 3 ||
         currentBox === 25 && currentTry === 4){
        compareWords()
      }
    }
    if (key === "Backspace") {
      if(currentBox === 0){return}
      if(
        ( currentTry === 0 && currentBox > 0)  ||
        ( currentTry === 1 && currentBox > 5)  ||
        ( currentTry === 2 && currentBox > 10) ||
        ( currentTry === 3 && currentBox > 15) ||
        ( currentTry === 4 && currentBox > 20) 
     ){
         dispatch(deleteLetter())
     }
    }
    else{
      if(/\b[a-zA-Z]{1}\b/gi.test(key)||key === "ñ" || key === "Ñ"){
        if(
           ( currentTry === 0 && currentBox < 5)  ||
           ( currentTry === 1 && currentBox < 10) ||
           ( currentTry === 2 && currentBox < 15) ||
           ( currentTry === 3 && currentBox < 20) ||
           ( currentTry === 4 && currentBox < 25) 
        ){
            dispatch(setLetter(key.toLocaleUpperCase()));
        }
      }
    }
  }
  const compareWords = () => { 
    const word = board.slice(currentTry*5,currentTry*5 + 5).map(letter =>letter.letter);
    const colors = word.map((character, i) => {
        if(currentLetters[i] === character){
           return "correct-spot"
        }
        else if(currentLetters.includes(character)){
           return "wrong-spot"
        }
        else if(!currentLetters.includes(character)){
           return "any-spot"
        }else{
          return "unchecked"
        }
    })
    dispatch(matchWords({colors,currentTry}));
    dispatch(setCurrentry(currentTry < 5?currentTry + 1:currentTry))
    if (colors.every(color => color === "correct-spot")) {
      dispatch(setGameOver(true));
      dispatch(addVictory());
      dispatch(addTry());
      dispatch(changeScore(true));
      dispatch(setCurrentry(0))
      dispatch(restart())
    }
    if(currentTry === 4){
      dispatch(addTry());
      dispatch(changeScore(true));
      dispatch(setCurrentry(0));
    }
  }
  // const restarTries = () => {dispatch(setCurrentry(0)); };
  return [handleWordBox] as const;
}

export default useWordHandler