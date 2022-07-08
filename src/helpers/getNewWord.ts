import { words } from "../data/words";

export const getNewWord = ()=>{
    return words[Math.floor(Math.random()*words.length)];
}