import React from "react";
import Image from "../assets/Container (1).png";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div>
        <p className="text-center text-gray-700 font-medium py-5">ABOUT US</p>
        <h1 className="text-center text-gray-800 text-5xl/16 pb-4 font-bold">
          Creative Blog Writing and
          <br /> publishing site
        </h1>
        <p className="text-center font-lightthin text-gray-600 pt-4">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          <br />
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace
          <br />
          diversity and empowerment.
        </p>
        <div className="flex justify-center items-center py-18">
          <img src={Image} alt="Section-Image" className="w-[80%]" />
        </div>
      </div>

      {/* ------------------ Section ---------------- */}

      <div className="py-10 flex flex-col  px-6 md:px-16 lg:px-32">
        <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] ">
          HOW WE WORK
        </p>
        <h1 className="text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-bold px-30 py-5">
          I will show you how <br className="hidden sm:block "/>
          our team works
        </h1>
        <p className="font-thin text-gray-600 text-[15px] sm:text-[17px]  px-30 pb-10 max-w-2xl">
          Bring to the table win-win market strategies to ensure
          <br className="hidden sm:block"/>
          perfect articles.
        </p>
        {/* --------------------cards--------------------- */}
        <div className="flex justify-center gap-6 sm:gap-8 lg:gap-10 flex-wrap px-4 sm:px-8 py-10">
         {/* -----Card-1-----  */}
          <div className="flex flex-col bg-white w-full sm:w-[40%] md:w-[30%] lg:w-[25%]
 h-auto rounded-lg shadow-xl/20 py-4 hover:bg-[#7C4EE4] group transition-all duration-300">
            <h1 className="text-[#dddbdb] font-bold text-6xl sm:text-7xl pt-4 pl-2">01</h1>
            <h1 className="text-[#7C4EE4] text-xl sm:text-2xl font-bold py-4 pl-3 hover:text-white group-hover:text-white transition-colors duration-300">
              Brainstorming
            </h1>
            <p className="text-gray-500 px-4 pb-9 text-sm sm:text-base group-hover:text-gray-200">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated
            </p>
          </div>

         {/* -----Card-2-----  */}
          <div className="flex flex-col bg-white w-full sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto rounded-lg shadow-xl/20 py-4 hover:bg-[#7C4EE4] group transition-all duration-300">
            <h1 className="text-[#dddbdb] font-bold text-6xl sm:text-7xl pt-4 pl-2">02</h1>
            <h1 className="text-[#7C4EE4] text-xl sm:text-2xl font-bold py-4 pl-3 hover:text-white group-hover:text-white transition-colors duration-300">
              Analyzing
            </h1>
            <p className="text-gray-500 px-4 pb-3.5 group-hover:text-gray-200">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line solely on the bottom line.
            </p>
          </div>
         {/* -----Card-3-----  */}
          <div className="flex flex-col bg-white  w-full sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto rounded-lg shadow-xl/20 py-4 hover:bg-[#7C4EE4] group transition-all duration-300">
            <h1 className="text-[#dddbdb] font-bold text-6xl sm:text-7xl pt-4 pl-2">03</h1>
            <h1 className="text-[#7C4EE4] text-xl sm:text-2xl font-bold py-4 pl-3 hover:text-white group-hover:text-white transition-colors duration-300">
              News Publishing
            </h1>
            <p className="text-gray-500 px-4 pb-9 group-hover:text-gray-200">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
export default About;
