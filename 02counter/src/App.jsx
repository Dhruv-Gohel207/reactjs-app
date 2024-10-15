import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter = 5
let [counter, setCounter]= useState(5)
const addValue = () =>{
  //counter += 1
  setCounter(counter + 1) 
  console.log("Value Added:", counter);


}

const removeValue = () =>{
  setCounter(counter -1 )
  console.log("VAlue REmoved:", counter);
}

  return (
    <>
      
      <h1>Vite + React</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
