import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <>
//     <h2>Hello everyone how are you  </h2>
//     </>
//   )
// }
const anotherElement = (
  <a href="https://google.com" target='_blacnk'>visit google</a>
) 
 const anotheruser = " Dhruv Gohel"
const reactElement = React.createElement('a', {href:'https://google.com', target:'_blank'}, 'link to dircet google', anotheruser)


createRoot(document.getElementById('root')).render(
 // <StrictMode>
      reactElement
       // <App/> 
          /*MyApp() if you want to use this type of the function execute then you need to remove the strictmode */
  // </StrictMode>,
)
