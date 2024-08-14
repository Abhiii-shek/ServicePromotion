import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white text-sm md:text-xl p-4 md:p-6 border-b border-slate-800 ">
      <div className="container mx-auto flex justify-between
        items-center">
        <h1 className="md:text-2xl text-sm font-bold">BharatWeb</h1>
        <div className="flex justify-center gap-4">
          <Link to="/" className="hover:text-gray-300 text-sm md:text-lg text-semibold">Home</Link>
          <Link to="/services" className="hover:text-gray-300 text-sm md:text-lg text-semibold">Services</Link>
          <Link to="/portfolio" className="hover:text-gray-300 text-sm md:text-lg text-semibold">Portfolio</Link>
          <Link to="/contact" className="hover:text-gray-300 text-sm md:text-lg text-semibold">Contact</Link>
       
          
        </div>
       
      </div>
      <Outlet/>
    </nav>
  );
}

export default Navbar;
