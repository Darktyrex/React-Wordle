import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './game/gameSlice'
import { scoreSlice } from './score/scoreSlice'
import { uiSlice } from './ui/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    score: scoreSlice.reducer,
    game: gameSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch