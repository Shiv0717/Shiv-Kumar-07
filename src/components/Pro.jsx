import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaExternalLinkAlt } from 'react-icons/fa'; // Importing additional icons

const Pro = ({ direction = "row", title, desc, link, img, tools, index }) => {
  return (
    <motion.div
      className={`w-full flex flex-col md:gap-5 lg:gap-15 
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
      <motion.div
        className='lg:w-1/2 md:w-full'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          className='rounded w-full'
          src={img}
          alt="Project Screenshot"
        />
      </motion.div>

      <motion.div
        className='lg:w-1/2 md:w-full flex flex-col gap-5'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className='mt-2 lg:text-4xl text-3xl'>{index}</h1>
        <h1 className='lg:text-3xl text-2xl'>{title}</h1>
        <p className='lg:text-xl text-justify text-zinc-400'>
          {desc}
        </p>
        <div className="flex gap-2 items-center">
          <FaTools className="text-xl text-blue-500" />
          <p>{tools}</p>
        </div>
        <p className='flex gap-2 items-center'>
          <FaExternalLinkAlt className="text-xl text-green-500" />
          <a href={link} target='_blank' rel="noopener noreferrer">Click Me</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Pro;
