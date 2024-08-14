import React from 'react';

function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-3 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-3 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-3 border rounded-lg" rows="5"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
