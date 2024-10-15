// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './Header';
import './index.css';
import Footer from './Footer';
import {Outlet} from 'react-router-dom'
import Gallery from './Gallery';
import Home from './Home';
import About from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="p-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about_us" element={<About/>} />
        </Routes>
      </main>
      <Outlet/>
      
      <Footer/>
      
    </Router>
  </React.StrictMode>
);
