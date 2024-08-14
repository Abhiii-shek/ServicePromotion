import React, { useState } from 'react';

function ContactUs() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  
    
    // Normally, you would send the form data to your server here
    console.log('Form submitted:', formData);

    // Simulate a successful form submission
    setFormStatus('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  emailjs.send(serviceId,templateId,publicKey,templateParams).then((response)=>{
    console.log('Email sent Sucessfully',response);
    setName('');
    setEmail('');
    setMessage('');


  }).catch((error)=>{
    console.log(error)
  })

  return (
    <div className="max-w-lg mt-10 mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg mb-10 border-b border-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block     mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block  mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full bg-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
      {formStatus && (
        <p className="mt-4 text-green-600 text-center">{formStatus}</p>
      )}
    </div>
  );
}

export default ContactUs;
