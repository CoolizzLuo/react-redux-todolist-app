import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    all: (state) => {
      state.filter = 'all'
    },
    done: (state) => {
      state.filter = 'done'
    },
    unDone: (state) => {
      state.filter = 'unDone'
    },
  }
})

export const { all, done, unDone } = filterSlice.actions
export const selectorFilter = state => state.filter.filter
export default filterSlice.reducer
