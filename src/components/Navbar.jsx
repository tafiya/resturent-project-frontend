'use client';

import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex md:justify-between justify-center items-center px-8 md:px-12 lg:px-16 lg:py-[50px] md:py-[40px] py-[27px] ">
        {/* Logo */}
        <h1 className="text-white font-bold md:flex hidden text-lg md:text-xl lg:text-[32px] tracking-widest">
          RESTAURANT
        </h1>

        {/* Search Input */}
        <div
          className="flex items-center bg-white 
        rounded-full px-4 py-2 w-full max-w-3xl lg:h-[61px] md:h-[45px] h-[35px] shadow-md"
        >
          <FiSearch className="text-gray-500 mr-2 lg:text-xl md:text-lg text-base" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent lg:text-2xl md:text-lg text-base outline-none w-full
             text-[#2D2D2D] font-semibold placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
