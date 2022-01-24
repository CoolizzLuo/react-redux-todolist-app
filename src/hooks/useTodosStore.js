import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectorFilter } from '../redux/features/filter/filterSlice'
import { todoSlice, addTodo, deleteTodo, updateTodo, isDoneToggle, clearTodos, selectorTodo } from '../redux/features/todo/todoSlice'


const useTodosStore = (initialValue, localStorageKey = 'todos') => {
  const filterValue = useSelector(selectorFilter)
  const todos = useSelector(selectorTodo)
  const dispatch = useDispatch()

  // const [todos, setTodos] = useState(() => {
  //   try {
  //     const item = window.localStorage.getItem(localStorageKey)
  //     return item ? JSON.parse(item) : initialValue
  //   } catch (error) {
  //     return initialValue
  //   }
  // })

  // useEffect(() => window.localStorage.setItem(localStorageKey, JSON.stringify(todos)))

  const handleAddTodo = (content) => dispatch(addTodo({ content }))
  const handleUpdateTodo = (id, content) => dispatch(updateTodo({ id, content }))
  const handleDeleteTodo = (id) => dispatch(deleteTodo({ id }))
  const handleIsDoneTodo = (id) => dispatch(isDoneToggle({ id }))
  const handleClearTodos = () => dispatch(clearTodos())

  console.log(todoSlice)

  const filterTodos = useMemo(() => {
    console.log(filterValue);
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
