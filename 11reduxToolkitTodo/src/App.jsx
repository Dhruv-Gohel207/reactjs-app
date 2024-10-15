import { useState } from 'react'

import './App.css'
import AddTodo from './component/addTodo'
import Todos from './component/Todos'

function App() {
                     
  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
