import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" text-white text-sm md:text-xl p-4 md:p-6 border-b border-fuchsia-400 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-2xl text-sm font-bold">BharatWeb</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300 text-sm text-semibold">Home</Link>
          <Link to="/services" className="hover:text-gray-300 text-sm text-semibold">Services</Link>
          <Link to="/portfolio" className='hover:text-gray-300 text-sm text-semibold'> Portfolio</Link>
          <Link to="/contact" className='hover:text-gray-300 text-lg text-semibold'>Contact</Link>
          
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
