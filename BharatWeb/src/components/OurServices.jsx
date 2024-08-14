import React from 'react'
import Seo from "../assets/images/Seo.jpg"
import WebDev from "../assets/images/webDev.jpg"
import Digital from "../assets/images/Digital.jpg"

function OurServices() {
  return (
    <div>
         <section id="services" className="p-10 border-b border-violet-950">
        <h2 className="text-3xl  font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Service Cards */}
          

          <div className=" p-6 rounded-xl  shadow-2xl outline outline-slate-900  text-white">
          <img src={WebDev} alt="Project 1" className="w-full h-64 object-cover mb-4 rounded-xl" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className='text-lg'>Professional web development services to build your online presence</p>
        </div>

        <div className=" p-6 rounded-xl  shadow-2xl outline outline-slate-900  text-white">
          <img src={Seo} alt="Project 1" className="w-full h-64 object-cover mb-4 rounded-xl" />
          <h3 className="text-xl font-semibold mb-2">SEO Optimization </h3>
          <p className='text-lg'>Improve your search engine rankings with our SEO strategies.</p>
        </div>

        <div className=" p-6 rounded-xl  shadow-2xl outline outline-slate-900  text-white">
          <img src={Digital} alt="Project 1" className="w-full h-64 object-cover mb-4 rounded-xl" />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className='text-lg'>Effective marketing solutions to grow your brand and reach more customers.</p>
        </div>

         
          
        </div>
      </section>
    </div>
  )
}

export default OurServices