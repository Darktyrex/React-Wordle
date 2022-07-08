import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface uiState{
    instructions: boolean,
    score: boolean,
    darkMode: boolean,
}

const initialState: uiState = {
    instructions: false,
    score: false,
    darkMode: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeInstructions: (state, action:PayloadAction<boolean>) => { state.instructions = action.payload },
    changeScore: (state, action:PayloadAction<boolean>) => { state.score = action.payload },
    changeDarkMode: (state,action:PayloadAction<boolean>) => { state.darkMode = action.payload },
  },
})

export const { changeInstructions, changeScore, changeDarkMode} = uiSlice.actions
