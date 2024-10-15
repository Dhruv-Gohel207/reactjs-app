import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'



function App() {
  const [themeMode, setThemeMode]= useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
//actual theme change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])



  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
       <div className="flex flex-wrap min-h-screen items-center bg-transparent">
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
            <div className="mb-4 ">
                <ThemeBtn/> 
            </div>

            <div className="flex flex-wrap gap-y-3">
                <Card/>
            </div>
        </div>
    </div>
</ThemeProvider>
  )
}

export default App
