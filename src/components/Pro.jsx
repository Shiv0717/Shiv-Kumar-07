import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaExternalLinkAlt } from 'react-icons/fa';

const Pro = ({ direction = "row", title, desc, link, img, tools, index }) => {

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <motion.div
      className={`w-full flex flex-col md:gap-6 lg:gap-16 p-6 rounded-lg 
        ${direction === "row" ? "lg:flex-row" : "lg:flex-row-reverse"} 
        bg-green-900 hover:bg-green-800 transition-colors duration-300 shadow-lg border border-green-700`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Image Section */}
      <motion.div
        className='lg:w-1/2 md:w-full flex justify-center items-center mb-6 lg:mb-0 overflow-hidden rounded-lg'
        variants={imageVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
        variants={textVariants}
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
