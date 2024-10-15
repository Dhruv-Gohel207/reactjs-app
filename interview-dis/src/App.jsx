import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("app render");
  const [value, setValue]=useState({
    value: 0,
  })
  //const [multiplValue, setMultiplValue] = useState(1)
 // let multiplValue = value * 5
 // const multiplyby5 = () =>{
   // setMultiplValue(value * 5)
 //   setValue(value + 1)
 
  
  const Clickme = () => {
    setValue({
      value:0
    })
  }
  return (
    <>
      <h1>main Value : {value.value }</h1>
      <button
      onClick={Clickme}
      >Click to Multiply by 5</button>
      {/* <h2>multipled Value: {multiplValue}</h2> */}
    </>
  )
}

export default App
