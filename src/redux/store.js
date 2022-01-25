import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import filterReducer from './features/filter/filterSlice'
import { TODO_LS_KEY } from '../constants/data'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  }
})

store.subscribe(() => {
  const { todos } = store.getState()
  window.localStorage.setItem(TODO_LS_KEY, JSON.stringify(todos.todos))
})

export default store
