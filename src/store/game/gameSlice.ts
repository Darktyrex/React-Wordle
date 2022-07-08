import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {BoxState} from "../../interfaces/BoxState"

interface gameState{
    currentWord: string,
    currentBox: number,
    currentTry: number,
    board: BoxState[],
    keyboard: [string],
    gameOver: boolean
}

const initialState: gameState = {
    currentWord: "",
    currentBox: 0,
    currentTry: 0,
    board: Array(25).fill({letter:"", status:"unchecked"}),
    keyboard: ["unchecked"],
    gameOver: false,
}

export const gameSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    newWord: (state, action:PayloadAction<string>) => { state.currentWord = action.payload },
    setGameOver: (state, action:PayloadAction<boolean>) => { state.gameOver = action.payload },
    setCurrentry: (state, action:PayloadAction<number>) => { state.currentTry = action.payload },
    matchWords: (state, action:PayloadAction<{colors:("unchecked" | "correct-spot" | "wrong-spot" | "any-spot")[]
    ,currentTry:number}>) => { 
      for (let i = action.payload.currentTry*5; i < action.payload.currentTry*5 + 5; i++) {
        state.board[i].status= action.payload.colors[i%5]
      }
    },
    setLetter: (state, action:PayloadAction<string>) => {
      if(state.currentBox === 25){return}
      state.board.find(value => value.letter === ""?value.letter=action.payload:"");
      state.currentBox++;
    },
    deleteLetter: (state) => {
      const item = state.board[state.currentBox - 1];
      if (item.letter) {
        item.letter = ""
      }
      state.currentBox--;
    },
    restart: (state) => {
      state.board = initialState.board;
      state.currentBox = initialState.currentBox;
      state.currentWord = initialState.currentWord;
      state.currentTry = initialState.currentTry;
      state.gameOver = initialState.gameOver;
      state.keyboard = initialState.keyboard;
    }
  },
})

export const { newWord, setLetter,deleteLetter, matchWords,setGameOver,restart,setCurrentry } = gameSlice.actions