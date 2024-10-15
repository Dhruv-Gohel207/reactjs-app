import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Login from './components/Login/Login.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='Login' element={<Login />} />

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />  
      <Route path='User/:userid' element={<User />} />  
      <Route
       path='Github'
        element={<Github />}
        loader={githubInfoLoader}
        />  



      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
