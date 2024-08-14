import React from 'react';

function Services() {
  return (
    <div className="p-20">
      <h2 className="text-3xl font-bold text-center mb-8">Detailed Services</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p>We create responsive and dynamic websites tailored to your business needs.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p>Our SEO services will help you achieve higher search engine rankings.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold ">Digital Marketing</h3>
          <p>We provide comprehensive digital marketing services to promote your brand online.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
