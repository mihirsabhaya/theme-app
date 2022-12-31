import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import counterReducer from "./counterSlice"
import { combineReducers } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    theme:themeReducer,
    counter:counterReducer,
  },
})

export default store