import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from './ducks/modals'

export const store = configureStore({
  reducer: {
    modals: modalsReducer
  },
})