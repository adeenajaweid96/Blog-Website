import React from 'react'
import image1 from "../assets/Vector.png"
import image2 from "../assets/Vector (2).png"
import image3 from "../assets/Frame.png"

const Contact = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
        <div>
          <h1>Get in Touch</h1>
          <p>Contact us to publish your content and show ads to our<br/>
           website and get a good reach.</p>
           <div>
            <img src={image1} alt="" />
            <h1>Office</h1>
            <p></p>
           </div>
           <div>
             <img src={image2} alt="" />
            <h1>Email</h1>
            <p></p>
           </div>
           <div>
             <img src={image3} alt="" />
            <h1>Phone</h1>
            <p></p>
           </div>
        </div>
      
    </div>
  )
}

export default Contact
