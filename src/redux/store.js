import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import filterReducer from './features/filter/filterSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  },
})

export default store