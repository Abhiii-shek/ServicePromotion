import React, { useState } from 'react';

function ContactUs() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId="service_wltqrxb"
    const templateId="template_3awrg9m"
    const publicKey="sYgWCon5lX-0Xz4yj"
    
    const templateParams={
        from_name: name,
        from_email:email,
        to_name:"Abhishek Rajbhar",
        from_message:message,
    }

    emailjs.sendForm(serviceId,templateId,publicKey,templateParams, '#myForm').then((response)=>{
      console.log('Email sent Sucessfully',response);
      setName('');
      setEmail('');
      setMessage('');
  
  
    }).catch((error)=>{
      console.log(error)
    })
  };


  return (
    <div className="lg:w-[40%] w-[80%] mt-10 mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg mb-10 border-b border-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} id="myForm" className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block     mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="from_name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            className="w-full bg-slate-800  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block  mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="w-full bg-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block  mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            required
            rows="5"
            className="w-full bg-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          ></textarea>
        </div>
        <input type="submit" value="Send" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"/>
          
      
      </form>
     
    </div>
  );
}

export default ContactUs;
