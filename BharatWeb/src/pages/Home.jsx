import React from 'react';

import OurServices from '../components/OurServices';
import OurExpertise from '../components/OurExpertise';




function Home() {
  return (
    <div>
      <section 
      className="bg-[url('../assets/images/Seo.jpg')] bg-cover bg-no-repeat bg-center text-white h-full md:h-screen p-20 text-center  border-b border-zinc-900">
        <img src={""} alt="" />
        <h1 className="md:text-5xl text-4xl  lg:text-6xl font-bold mb-4 mt-12  md:mt-20 text-[#5b2fdf]">Boost Your Business with Our Services</h1>
        <p className="text-xl lg:text-3xl md:text-2xl mb-8">Web Development, SEO, and Digital Marketing Experts</p>
        <a href="/services" className="bg-white  text-2xl px-6 py-3 font-bold rounded-full text-[#5b2fdf]">Get Started</a>
      </section>
      <section>
        <OurServices/>
      </section>

      {/* <section>
        <OurExpertise/>
      </section> */}

     

      
    </div>
  );
}

export default Home;
