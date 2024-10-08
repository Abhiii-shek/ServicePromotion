import React from 'react';

import OurServices from '../components/OurServices';

import ContactUs from './ContactUs';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';




function Home() {
  return (
    <div>
      <section 
      className="bg-[url('/src/assets/images/Hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-cover text-white md:h-screen p-20 text-center  border-b border-zinc-900">
        <img src={""} alt="" />
        <h1 className="md:text-5xl text-3xl text-center lg:text-6xl font-bold mb-4 mt-10  md:mt-20 text-[#5b2fdf]">Boost Your Business with Our Services</h1>
        <p className="text-lg lg:text-3xl md:text-2xl mb-8">Web Development, SEO, and Digital Marketing Experts</p>
        <button href="/services" className="bg-white  text-2xl px-6 py-3 font-bold rounded-full text-[#5b2fdf]">Get Started</button>
      </section>
      <section>
        <OurServices/>
      </section>

      {/* <section>
        <OurExpertise/>
      </section> */}
      <section>
        <Portfolio/>
      </section>
      {/* <section>
        <ContactUs/>
      </section> */}
<section>
  <ContactForm/>
</section>
     

      
    </div>
  );
}

export default Home;
