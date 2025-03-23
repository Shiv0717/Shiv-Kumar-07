import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaExternalLinkAlt } from 'react-icons/fa'; // Importing additional icons

const Pro = ({ direction = "row", title, desc, link, img, tools, index }) => {
  return (
    <motion.div
      className={`w-full flex flex-col md:gap-6 lg:gap-16 
        ${direction === "row" ? "lg:flex-row" : direction === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-col"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        scale: window.innerWidth < 768 ? 1 : 1.05, // Scale only on larger screens
        transition: { duration: 0.3 }
      }}
    >
      {/* Image Section */}
      <motion.div
        className='lg:w-1/2 md:w-full mb-6 lg:mb-0'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          className='rounded-lg shadow-md w-full'
          src={img}
          alt="Project Screenshot"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className='lg:w-1/2 md:w-full flex flex-col gap-5'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className='lg:text-4xl text-3xl text-white font-bold'>{index}</h1>
        <h2 className='lg:text-3xl text-2xl text-white font-semibold'>{title}</h2>
        <p className='lg:text-xl text-base text-zinc-400 text-justify'>
          {desc}
        </p>
        <div className="flex gap-2 items-center text-white">
          <FaTools className="text-xl text-blue-500" />
          <p>{tools}</p>
        </div>
        <p className='flex gap-2 items-center text-white'>
          <FaExternalLinkAlt className="text-xl text-green-500" />
          <a href={link} target='_blank' rel="noopener noreferrer" className="underline hover:text-blue-400">Click Me</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Pro;
