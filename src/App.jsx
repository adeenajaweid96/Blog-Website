import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
// import Section404 from './components/404'
import Section from './components/Section'
import Footer from './components/Footer'


const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
   {/* <Hero/> */}
   <Route path='/' element={<Hero/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
   {/* <Section404/> */}
   </Routes>
   <Section/>
   <Footer/>
   </>
  )
}

export default App
