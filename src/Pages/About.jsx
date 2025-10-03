import React from 'react'
import Image from "../assets/Container (1).png"

const About = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
        <p className='text-center text-gray-700 font-medium py-5'>ABOUT US</p>
        <h1 className='text-center text-gray-800 text-5xl/16 pb-4 font-bold'>Creative Blog Writing and<br/> publishing site</h1>
        <p className='text-center font-thin text-gray-600 pt-4'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster<br/>
         collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace<br/>
          diversity and empowerment.</p>
          <div className='flex justify-center items-center py-18'>
          <img src={Image} alt="Section-Image" />
          </div>
    </div>
  )
}

export default About
