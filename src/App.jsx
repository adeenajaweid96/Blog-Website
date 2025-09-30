import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section404 from './components/404'
import Section from './components/Section'
import Footer from './components/Footer'


const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Section404/>
   <Section/>
   <Footer/>
   </>
  )
}

export default App
