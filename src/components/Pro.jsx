import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaExternalLinkAlt } from 'react-icons/fa';

const Pro = ({ direction = "row", title, desc, link, img, tools, index }) => {
  return (
    <motion.div
      className={`w-full flex flex-col md:gap-6 lg:gap-16 p-6 rounded-lg 
        ${direction === "row" ? "lg:flex-row" : direction === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-col"} 
        bg-green-900 hover:bg-green-800 transition-colors duration-300 shadow-lg border border-green-700`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Image Section */}
      <motion.div
        className='lg:w-1/2 md:w-full flex justify-center items-center mb-6 lg:mb-0 overflow-hidden rounded-lg'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <img
          className='rounded-lg object-cover h-72 w-full max-w-lg aspect-[4/3] shadow-xl'
          src={img}
          alt="Project Screenshot"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className='lg:w-1/2 md:w-full flex flex-col gap-5 max-w-lg '
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className='lg:text-4xl text-3xl text-white font-bold'>#{index}</h1>
        <h2 className='lg:text-3xl text-2xl text-white font-semibold'>{title}</h2>
        <p className='lg:text-xl text-base text-gray-200 leading-relaxed text-justify'>{desc}</p>
        
        {/* Tools Section */}
        <div className="flex gap-2 items-center text-white">
          <FaTools className="text-xl text-green-400" />
          <p>{tools}</p>
        </div>

        {/* Link Section */}
        <p className='flex gap-2 items-center text-white'>
          <FaExternalLinkAlt className="text-xl text-green-400" />
          <a href={link} target='_blank' rel="noopener noreferrer" className="underline hover:text-green-300">Visit Project</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Pro;
