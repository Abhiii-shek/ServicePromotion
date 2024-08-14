import React from 'react'
import CircleArrowRightIcon from '../components/CircleArrowRightIcon'
import AsteriskIcon from '../components/AsteriskIcon'

  
 

function OurExpertise() {
  return (
   <>
   
<section className="bg-[#0b001f] text-white py-16">
<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
  <div className="flex flex-col items-center md:items-start md:w-1/2">
    <div className="flex items-center justify-center w-48 h-48 bg-[#5b2fdf] rounded-full">
      <AsteriskIcon className="text-white w-24 h-24" />
    </div>
    <h2 className="text-2xl font-semibold text-gray-400 mt-4">Our Expertise</h2>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
      Expert <span className="text-[#5b2fdf]">Developers</span>, Exceptional Online Experiences.
    </h1>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0">
    <div className="bg-[#1e0a3c] rounded-lg p-6 md:p-8 lg:p-10 space-y-6">
      <div className="flex items-start space-x-4">
        <CircleArrowRightIcon className="text-[#5b2fdf] w-8 h-8" />
        <div>
          <h3 className="text-xl font-semibold">SEO Mastery</h3>
          <p className="text-gray-400">Websites optimized for search visibility and lead generation.</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <CircleArrowRightIcon className="text-[#5b2fdf] w-8 h-8" />
        <div>
          <h3 className="text-xl font-semibold">Designs that Convert</h3>
          <p className="text-gray-400">Intuitive layouts that guide visitors toward action.</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <CircleArrowRightIcon className="text-[#5b2fdf] w-8 h-8" />
        <div>
          <h3 className="text-xl font-semibold">Responsive Excellence</h3>
          <p className="text-gray-400">Flawless experiences across all devices.</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <CircleArrowRightIcon className="text-[#5b2fdf] w-8 h-8" />
        <div>
          <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
          <p className="text-gray-400">We measure success and refine strategies for growth.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


   </>
  )
}

export default OurExpertise
