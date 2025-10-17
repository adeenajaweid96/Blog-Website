import image1 from "../assets/Vector.png"
import image2 from "../assets/Vector (2).png"
import image3 from "../assets/Frame.png"

const Contact = () => {
  return (
    <div className=' bg-gray-100 mx-auto max-w-screen-2xl '>
        <div>
          <h1 className="text-center text-gray-800 text-5xl/16 pt-20 font-bold">Get in Touch</h1>
          <p className="text-center font-lightthin text-gray-600 pt-2">Contact us to publish your content and show ads to our<br/>
           website and get a good reach.</p>
           <div className="flex ">
           <div className="bg-white ">
            <img src={image1} alt="" className="bg-[#7C4EE4] rounded-full w- "/>
            <h1>Office</h1>
            <p>Victoria Street, London, UK</p>
           </div>
           <div>
             <img src={image2} alt="" />
            <h1>Email</h1>
            <p>hello@zarrin.com</p>
           </div>
           <div>
             <img src={image3} alt="" />
            <h1>Phone</h1>
            <p>(001) 2342 3451</p>
           </div>
           </div>


        </div>
      
    </div>
  )
}

export default Contact
