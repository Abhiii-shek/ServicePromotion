import React from 'react';
import project1 from "../assets/images/project1.jpg"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.jpg"

function Portfolio() {
  return (
    
    <div className="p-10 mb-20 border-b border-slate-800  ">
      
      <h2 className="text-3xl font-bold text-center mb-8">Our <span className='text-gray-400'>Portfolio</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Items */}
        <div className=" p-6 rounded-lg shadow-xl outline outline-slate-900   text-white">
          <img src={project1} alt="Project 1" className="w-full h-64 object-cover mb-4 rounded-xl" />
          <h3 className="text-xl font-semibold mb-2">Web Development </h3>
          <h4 className='text-lg font-semibold'>Baisers de Chocolat</h4>
          <p className='text-lg'>Made A landing page for Baisers de Chocolat</p>
        </div>

      

        <div className=" p-6 rounded-lg shadow-lg outline outline-slate-900  text-white">
          <img src={project2} alt="Project 2" className="w-full h-64 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <h4 className='text-lg font-semibold'>The Sofia Log</h4>
          <p className='text-lg'>The website offers a personal narrative style, making the content relatable and easy to follow.</p>
        </div>
        <div className=" p-6 rounded-lg shadow-lg outline outline-slate-900  text-white">
          <img src={project3} alt="Project 3" className="w-full h-64 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className='text-lg'>Keyboard Research,On Page SEO,</p>
          <p>Off Page SEO,Technical SEO ,SEO Tools</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
