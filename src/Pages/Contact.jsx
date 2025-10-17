import image1 from "../assets/Vector.png";
import image2 from "../assets/Vector (2).png";
import image3 from "../assets/Frame.png";
import map from "../assets/Rectangle 1086.png"


const Contact = () => {
  return (
    <div className=" bg-gray-100 mx-auto max-w-screen-2xl ">
      <div>
        <h1 className="text-center text-gray-800 text-5xl/16 pt-20 font-bold">
          Get in Touch
        </h1>
        <p className="text-center font-lightthin text-gray-600 pt-2">
          Contact us to publish your content and show ads to our
          <br />
          website and get a good reach.
        </p>
        <div className="flex items-center justify-center gap-10 py-10">
          <div className="bg-white rounded-md flex flex-col items-center w-[20%] py-5">
            <div className="bg-[#7C4EE4] rounded-full p-2 flex items-center justify-center">
              <img
                src={image1}
                alt=""/>
            </div>
            <h1 className="text-[#7C4EE4] font-bold text-[18px] pt-4">Office</h1>
            <p className="text-gray-600 pt-3">Victoria Street, London, UK</p>
          </div>



          
          <div className="bg-white rounded-md flex flex-col items-center  w-[20%] py-5">
                        <div className="bg-[#7C4EE4] rounded-full p-2 flex items-center justify-center">

            <img src={image2} alt="" />
            </div>
            <h1 className="text-[#7C4EE4] font-bold text-[18px] pt-4">Email</h1>
            <p className="text-gray-600 pt-3">hello@zarrin.com</p>
          </div>
          <div className="bg-white rounded-md flex flex-col items-center  w-[20%] py-5">
                        <div className="bg-[#7C4EE4] rounded-full p-2 flex items-center justify-center">

            <img src={image3} alt="" />
            </div>

            <h1 className="text-[#7C4EE4] font-bold text-[18px] pt-4">Phone</h1>
            <p className="text-gray-600 pt-3">(001) 2342 3451</p>
          </div>
        </div>


<div>
<img src={map} alt="Map" />
<div className="bg-white w-[45%] rounded-md h-[80%]">
  <label htmlFor="">Name</label>
<input type="text"  />

  <label htmlFor="">Email</label>
<input type="email"  />

  <label htmlFor="">Phone</label>
<input type="number"/>

  <label htmlFor="">Subject</label>
<input type="text"  />
<label htmlFor="">Message</label>
<textarea name="message" id=""></textarea>
</div>
</div>

      </div>
    </div>
  );
};

export default Contact;
