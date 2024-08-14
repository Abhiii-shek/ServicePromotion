import React from 'react';

function Portfolio() {
  return (
    
    <div className="p-10  ">
      
      <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Items */}
        <div className=" p-6 rounded-lg shadow-xl outline outline-slate-900   text-white">
          <img src="project1.jpg" alt="Project 1" className="w-full h-64 object-cover mb-4 rounded-xl" />
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className='text-lg'>Brief description of the project.</p>
        </div>

      

        <div className=" p-6 rounded-lg shadow-lg outline outline-slate-900  text-white">
          <img src="project2.jpg" alt="Project 2" className="w-full h-64 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className='text-lg'>Brief description of the project.</p>
        </div>
        <div className=" p-6 rounded-lg shadow-lg outline outline-slate-900  text-white">
          <img src="project3.jpg" alt="Project 3" className="w-full h-64 object-cover mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p className='text-lg'>Brief description of the project.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
