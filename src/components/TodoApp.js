import { useState, useCallback } from 'react'
import styled from 'styled-components'
import TodoInput from './TodoInput'
import TodoFilterButton from './TodoFilterButton'
import TodoItem from './TodoItem'
import useTodosStore from '../hooks/useTodosStore'

const TodoItemList = styled.ul`
  margin: 3rem 0 1.5rem;
`

const TodoFooter = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  font-size: 1rem;
  padding: .4rem .8rem;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: .1rem .1rem .1rem #999;
  cursor: pointer;
  &.active {
    transform: translateY(.2rem);
    box-shadow: none;
    transform: scale(1.05);
  }
  &:hover {
    background: #f9ca24;
    color: #333;
  }
`

const TodoApp = () => {
  const [editing, setEditing] = useState(null)

  const {
    todos,
    handleAddTodo,
    handleUpdateTodo,
    handleIsDoneTodo,
    handleDeleteTodo,
    handleClearTodos
  } = useTodosStore()

  const handleInputAddTodo = useCallback((value) => {
    if (editing) {
      alert('please complete your editing')
      return
    }
    handleAddTodo(value)
  }, [editing, handleAddTodo])

  const handleClearTodo = () => {
    if (!todos.length) return alert('already empty data !')
    if (window.confirm('sure clear all todos ?')) {
      handleClearTodos()
      setEditing(null)
    }
  }


  return (
    <>
      <TodoInput addTodo={handleInputAddTodo} />
      <TodoFilterButton />
      <TodoItemList>
        {
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editing={editing}
              setEditing={setEditing}
              updateTodo={handleUpdateTodo}
              changeDoneTodo={handleIsDoneTodo}
              deleteTodo={handleDeleteTodo} />
          ))
        }
      </TodoItemList>
      <TodoFooter>
        total: {todos.length}
        <Button onClick={handleClearTodo}>Clear all</Button>
      </TodoFooter>
    </>
  )
}

export default TodoApp;