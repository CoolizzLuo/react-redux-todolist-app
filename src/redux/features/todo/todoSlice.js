import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
  todos: [
    { id: v4(), content: '飄浮... 你也會飄浮嗎？', isDone: false },
    { id: v4(), content: '跳舞小丑潘尼懷斯！', isDone: true }
  ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: v4(),
        content: action.payload.value,
        isDone: false
      })
    },
    updateTodo: (state, action) => {
      state.todos.map(todo => {
        if (todo.id === action.payload.editId) {
          return todo.content = action.payload.value
        }
        return todo
      })
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
      state.todos.splice(index, 1)
    },
    isDoneToggle: (state, action) => {
      state.todos.map(todo => {
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
