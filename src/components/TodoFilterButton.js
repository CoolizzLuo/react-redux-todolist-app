import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { filterSlice, selectorFilter } from '../redux/features/filter/filterSlice'


const FilterBtnWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
`

const Button = styled.button`
  flex: 1;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #555;
  border: 1px solid #ccc;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f9ca24;
    color: #333;
  }
  ${({ $active }) => $active && `
    background: #f9ca24;
    color: #333;
  `}
  
`

const TodoFilterButton = () => {
  const filterValue = useSelector(selectorFilter)
  const dispatch = useDispatch()
  const handleChangeFilter = (action) => () => dispatch(filterSlice.actions[action]())

  return (
    <FilterBtnWrapper>
      {
        Object.keys(filterSlice.actions).map((action) => (
          <Button
            key={action}
            $active={filterValue === action}
            onClick={handleChangeFilter(action)}>
            {action}
          </Button>
        ))
      }
    </FilterBtnWrapper>
  )
}

export default TodoFilterButton
