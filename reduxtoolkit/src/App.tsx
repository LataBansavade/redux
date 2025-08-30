import './App.css'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      
      <h1 className='text-3xl font-bold text-red-500'>Redux Toolkit</h1>

      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
