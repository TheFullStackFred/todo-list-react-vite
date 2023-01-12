import TodosList from './TodosList'

const AddTodo = () => {
  return (
    <>
      <div className='add-todo-section'>
        <h2>Add Todo</h2>
        <input type='text' />
      </div>
      <div className='show-todos-section'>
        <TodosList />
      </div>
    </>
  )
}

export default AddTodo
