import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react';
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Signup</h1>
        <form action="">
<div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your Name' required/>
          </div>
          <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter your Email' required />
          </div>
          <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter Password' required/>
          </div>
          <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder='Confirm Password' required/>
          </div>
          <button>Sign Up </button>
          <p>Already have an Account <span><Link to="/login">Login</Link></span></p>
          <h1>Or</h1>
          <button>Login with Google</button>
        </form>
      </div>

    </div>
  )
}

export default Signup
