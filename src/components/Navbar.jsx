'use client';

import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex md:justify-between justify-center items-center px-8 md:px-16 py-4">
        {/* Logo */}
        <h1 className="text-white font-bold md:flex hidden text-lg md:text-xl tracking-widest">
          RESTAURANT
        </h1>

        {/* Search Input */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md shadow-md">
          <FiSearch className="text-gray-500 mr-2 text-xl" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent outline-none w-full text-gray-800 font-semibold placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
