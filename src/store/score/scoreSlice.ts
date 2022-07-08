import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface scoreState{
    tries: number,
    victories: number,
    time: string,
}

const initialState: scoreState = {
    tries: 0,
    victories: 0,
    time: Date()
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addTry: (state) => { state.tries++ },
    addVictory: (state) => { state.victories++ },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addTry, addVictory} = scoreSlice.actions
