import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const mailtoLink = `mailto:shivakuu5544@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="ml-6 mr-6 flex flex-col items-center lg:ml-18 lg:mr-14">
      <h1 className='text-3xl font-bold text-black mt-5'>Contact Us</h1>

      <div className='lg:w-full flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='lg:w-1/2 w-full p-4'>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 w-full" 
              placeholder="Enter your name" 
              required
            />

            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 w-full mt-4" 
              placeholder="Enter your email" 
              required
            />

            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 w-full mt-4 h-40 resize-none" 
              placeholder="Enter your message"
              required
            ></textarea>

            <button 
              type="submit" 
              className="mt-4 bg-zinc-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full p-4 text-black'>
          <h1 className="text-3xl font-bold lg:mt-6">Let's Talk for</h1>
          <h1 className="text-3xl font-bold lg:mb-6">Something Special</h1>
          <p className="mt-2 text-justify lg:w-[80%]">
            I seek to push the limits of creativity to create highly engaging, user-friendly, and memorable interactive experiences.
          </p>
          <p className="mt-4">📧 Email:shivaku5544@gmail</p>
          <p className="mt-2">📞 Phone: +918074379493</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
