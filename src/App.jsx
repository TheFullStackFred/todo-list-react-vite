import TodosContext from '../'
import AddTodos from './components/AddTodos'
import './App.css'

const App = () => {
  return (
    <TodosContext.Provider value={1}>
      return <AddTodos />
    </TodosContext.Provider>
  )
}

export default App
