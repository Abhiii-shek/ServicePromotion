import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import OurExpertise from './components/OurExpertise';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import OurServices from './components/OurServices';
import ContactForm from './pages/ContactForm';




function App() {
  return (
    <Router>
        <Navbar />
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Background styling */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        
        
        {/* <div className="flex-grow text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurExpertise />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
    
        </div> */}

        <div className='flex flex-grow text-white'>
          <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<OurExpertise/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
        
          </Routes>
          
        </div>
        
        

        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
