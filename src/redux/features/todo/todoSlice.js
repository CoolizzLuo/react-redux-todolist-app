import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { TODO_LS_KEY } from '../../../constants/data'

const initialState = {
  todos: JSON.parse(window.localStorage.getItem(TODO_LS_KEY)) ||
    [
      { id: v4(), content: '吃飯？', isDone: false },
      { id: v4(), content: '睡覺！', isDone: true },
      { id: v4(), content: '打咚咚？！', isDone: false }
    ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: v4(),
        content: action.payload.content,
        isDone: false
      })
    },
    updateTodo: (state, action) => {
      state.todos.forEach(todo => {
        if (todo.id === action.payload.id) {
          return todo.content = action.payload.content
        }
        return todo
      })
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
      state.todos.splice(index, 1)
    },
    isDoneToggle: (state, action) => {
      state.todos.forEach(todo => {
        if (todo.id === action.payload.id) {
          return todo.isDone = !todo.isDone
        }
        return todo
      })
    },
    clearTodos: (state) => {
      state.todos = []
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, isDoneToggle, clearTodos } = todoSlice.actions
export const selectorTodo = state => state.todos.todos
export default todoSlice.reducer
