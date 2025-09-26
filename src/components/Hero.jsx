import React from 'react'
import hero_img from "../assets/Container.png"


const Hero = () => {
  return (
    // w-[100%] h-[90vh]
    <div className=' flex flex-wrap sm:flex-wrap bg-[#7C4EE4]  justify-around  max-w-screen-2xl mx-auto'>
      <div className='flex flex-col px-4'>
        <p className='text-white text-xl pt-20'>Featured Post</p>
        <h1 className='text-white sm:text-6xl py-10 font-bold text-4xl'>How AI will <br/> Change the Future</h1>
        <p className='text-white sm:text-xl/6 font-thin text-xs'>The future of AI will see home robots having enhanced<br/>
         intelligance, increased capabilities and becoming more<br/>
          personal and possibly cute. For example, home robots<br/>
           will overcome navigation, direction </p>
        <button className='bg-white text-gray-800 rounded-md w-42 h-12 font-medium text-[18px] my-10'>Read More</button>
      </div>
      <div className='flex py-20 mt-5 justify-center p-2'>
        <img src={hero_img} alt="" className='sm:w-[70%] '/>
      </div>
    </div>
  )
}

export default Hero
