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


<div className="flex flex-col">
 <img src={map} alt="Map" />

  <div className="w-full flex justify-center absolute ">
          <form
            className="bg-white w-full max-w-xl rounded-md shadow-md p-6 md:p-8
                       flex flex-col gap-4 min-h-[420px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-xl font-semibold">Contact us</h2>

            {/* Two-column inputs on md+, stacked on sm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border-2 border-gray-200 outline-none px-3 py-2 focus:border-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border-2 border-gray-200 outline-none px-3 py-2 focus:border-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-md border-2 border-gray-200 outline-none px-3 py-2 focus:border-gray-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border-2 border-gray-200 outline-none px-3 py-2 focus:border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows={6}
                className="w-full resize-y rounded-md border-2 border-gray-200 outline-none px-3 py-2 focus:border-gray-400"
                placeholder="Write your message..."
              />
            </div>

            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-[#7C4EE4] text-white font-medium hover:opacity-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>
</div>
{/* 
// <div className="bg-white w-[45%] rounded-md h-[60%] flex flex-col justify-center items-center">
// <div className="col-2">
//   <label htmlFor="">Name</label><br/>
// <input type="text" required className="outline-gray-200 border-2 border-gray-200"/>

//   <label htmlFor="">Email</label>
// <input type="email"  required className="outline-gray-200 border-2 border-gray-200"/>
// </div>
// <div className="col-2">
//   <label htmlFor="">Phone</label>
// <input type="number" required className="outline-gray-200 border-2 border-gray-200"/>

//   <label htmlFor="">Subject</label>
// <input type="text" required className="outline-gray-200 border-2 border-gray-200" />
// </div>
// <label htmlFor="">Message</label>
// <textarea name="message" id=""></textarea>
// </div>
// </div> */}


       



      </div>
    </div>
  );
};

export default Contact;
