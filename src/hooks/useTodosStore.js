import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectorFilter } from '../redux/features/filter/filterSlice'
import { addTodo, deleteTodo, updateTodo, isDoneToggle, clearTodos, selectorTodo } from '../redux/features/todo/todoSlice'


const useTodosStore = () => {
  const filterValue = useSelector(selectorFilter)
  const todos = useSelector(selectorTodo)
  const dispatch = useDispatch()

  const handleAddTodo = (content) => dispatch(addTodo({ content }))
  const handleUpdateTodo = (id, content) => dispatch(updateTodo({ id, content }))
  const handleDeleteTodo = (id) => dispatch(deleteTodo({ id }))
  const handleIsDoneTodo = (id) => dispatch(isDoneToggle({ id }))
  const handleClearTodos = () => dispatch(clearTodos())

  const filterTodos = useMemo(() => {
    switch (filterValue) {
      case 'done':
        return todos.filter(todo => todo.isDone)
      case 'unDone':
        return todos.filter(todo => !todo.isDone)
      case 'all':
      default:
        return todos
    }
  }, [filterValue, todos])

  return {
    todos: filterTodos,
    handleAddTodo,
    handleUpdateTodo,
    handleIsDoneTodo,
    handleDeleteTodo,
    handleClearTodos
  }
}

export default useTodosStore
