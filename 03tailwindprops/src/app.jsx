import { useState } from 'preact/hooks'

import './app.css'
import Card from './components/card'

export function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username : "Dhruv",
    age:20
  }

  return (
    <>

      <h1 className='bg-blue-400 p-5 rounded-xl text-black mb-5' >Vite + react + tailwind</h1>

    <Card username="Ney" btnText="Click me" />
    <Card username="Coffe" /> 
    </>
  )
}
