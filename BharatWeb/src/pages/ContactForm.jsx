import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbzlzdo");
  if (state.succeeded) {
      return <p className='text-center'>Thanks for joining!</p>;
  }
  return (
    <div className='lg:w-[40%] w-[80%] mt-10 mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg mb-10 border-b border-white'>
         <h2 className="text-3xl font-bold text-center mb-6">Contact <span className='text-gray-400'>Us</span> </h2>
    <form onSubmit={handleSubmit} className='space-y-4'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
      className='w-full bg-slate-800  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 mb-4'
      id="email"
      type="email" 
      name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
         <label htmlFor="email">
        Name
      </label>
      <input
      className='w-full bg-slate-800  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 mb-4'
      id="name"
      type="text" 
      name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        />
         <label className='mt-4' htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='w-full bg-slate-800  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500'
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </div>
  );
}

export default ContactForm