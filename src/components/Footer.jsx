import React from 'react'
import logo from "../assets/Group 237743.png";
import { Instagram,  Facebook  , Linkedin, Youtube  } from 'lucide-react';


const Footer = () => {
  return (
  <footer className='max-w-screen-2xl mx-auto py-10 flex flex-col items-center flex-wrap'>
    <div className='items-center flex flex-col border-b-2 border-b-gray-400 w-[90%]'>
      <img src={logo} alt=""  className='py-6'/>
      <ul className='flex  gap-14 text-xl font-thin py-3 justify-center'>
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>

<div className="flex py-5 gap-7">
  <div className="bg-[#7C4EE4] rounded-full p-3">
    <Instagram className="text-white w-6 h-6" />
  </div>
  <div className="bg-[#7C4EE4] rounded-full p-3">
    <Facebook className="text-white w-6 h-6" />
  </div>
  <div className="bg-[#7C4EE4] rounded-full p-3">
    <Linkedin className="text-white w-6 h-6" />
  </div>
  <div className="bg-[#7C4EE4] rounded-full p-3">
    <Youtube className="text-white w-6 h-6" />
  </div>
</div>


    </div>
    <div className='flex justify-center mt-10'>
      <p className='text-[18px] font-thin'>Copyright Inc © 2025. All Right Reserved</p>
    </div>
  </footer>  
  
  )
}

export default Footer
