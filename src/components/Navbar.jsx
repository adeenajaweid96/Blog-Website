// import React from "react";
// import logo from "../assets/Group 237743.png";
// import { Search } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="bg-white flex max-w-screen-2xl  mx-auto p-10 justify-between">
//       <div>
//         <img src={logo} alt="logo" className="" />
//       </div>
//       <div className="flex p-">
//         <ul className="flex gap-8 py-2 px-6 text-purple ">
//           <li className="text-gray-500 font-medium text-xl">Home</li>
//           <li className="text-gray-500 font-medium text-xl">Blog</li>
//           <li className="text-gray-500 font-medium text-xl">About</li>
//           <Search className="text-gray-500 mt-1"/>
//         </ul>
//         <button className="bg-[#7C4EE4] text-white rounded-md font-medium  w-40 h-12">Sign Up / Login</button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import logo from "../assets/Group 237743.png";
import { Search, Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white max-w-screen-2xl mx-auto p-5 flex justify-around items-center ">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-10 " />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-8 items-center text-purple">
          <li className="text-gray-500 font-medium text-lg hover:text-[#7C4EE4] cursor-pointer">Home</li>
          <li className="text-gray-500 font-medium text-lg hover:text-[#7C4EE4] cursor-pointer">Blog</li>
          <li className="text-gray-500 font-medium text-lg hover:text-[#7C4EE4] cursor-pointer">About</li>
          <Search className="text-gray-500 cursor-pointer" />
        </ul>
        <button className="bg-[#7C4EE4] text-white rounded-md font-medium w-36 h-11">
          Sign Up / Login
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden p-5">
          <ul className="flex flex-col gap-5 text-gray-600 font-medium text-lg">
            <li className="hover:text-[#7C4EE4] cursor-pointer">Home</li>
            <li className="hover:text-[#7C4EE4] cursor-pointer">Blog</li>
            <li className="hover:text-[#7C4EE4] cursor-pointer">About</li>
            <li className="flex items-center gap-2">
              <Search className="text-gray-500" /> Search
            </li>
          </ul>
          <button className="bg-[#7C4EE4] text-white rounded-md font-medium w-full h-11 mt-5">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}
