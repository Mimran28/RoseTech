import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Courses from '../courses/Courses'
import Contact from '../contact/Contact'
import Header from '../header/Header'
import Headroom from 'react-headroom'
import './approuter.css'
import Events from '../events/Events'
function AppRouter() {
  return (
    <BrowserRouter>
    <Headroom disableInlineStyles >
    <Header/>
    </Headroom>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/events" element={<Events/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;