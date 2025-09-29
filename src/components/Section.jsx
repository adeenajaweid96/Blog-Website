import React from 'react'

const Section = () => {
  return (
    <div className='bg-[#7C4EE4] py-10 max-w-screen-2xl mx-auto flex flex-col items-center'>
      <h1 className='text-5xl text-center py-4 text-white font-bold'>Get our stories delieved From <br/> us to your inbox weekly.</h1>
      <div className='py-8 flex gap-6'>
      <input type="email" placeholder='Your Email' className=' rounded-md w-[80%] bg-white p-3 outline-none'/>
      <button className='text-white bg-[#7C4EE4] border-2 border-white p-3 w-50 rounded-md font-semibold text-xl'>Get Started</button>
      </div>
      <p className='text-gray-300 text-[18px] text-center font-light'>Get a response tomorrow if you submit by 9pm today. If we received after<br/>
       9pm will get a reponse the following day.</p>

    </div>
  )
}

export default Section
