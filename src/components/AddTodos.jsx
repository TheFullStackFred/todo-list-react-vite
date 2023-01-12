import { useContext } from 'react'
import TodosContext from '../context/TodosContext'
import TodosList from './TodosList'
console.log(TodosContext)
const AddTodos = () => {
  const todos = useContext(TodosContext)
  console.log(todos)
  return (
    <>
      <div className='add-todo-section'>
        {todos}
        <h2>Add Todo</h2>
        <input type='text' placeholder='Enter todo...' />
        <button>Add Todo</button>
      </div>
      <div className='show-todos-section'>
        <TodosList />
      </div>
    </>
  )
}

export default AddTodos
