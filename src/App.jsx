import AddTodos from './components/AddTodos'
import TodosContext from './context/TodosContext'
import './App.css'

const App = () => {
  return (
    <TodosContext.Provider value={[]}>
      <AddTodos />
    </TodosContext.Provider>
  )
}

export default App
