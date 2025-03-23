import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import shiv from '../assets/Group 1.png';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center py-12 px-8 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Left Section: Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <img className="lg:w-3/4 w-4/5 rounded-lg shadow-lg" src={shiv} alt="Shiv" />
      </motion.div>

      {/* Right Section: Text Information */}
      <div className="lg:w-1/2 w-full text-center lg:text-left px-4 sm:px-8">
        <motion.h1
          className="text-3xl font-semibold mb-6 text-gray-800"
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaInfoCircle className="inline-block mr-2 text-2xl text-black" />
          About Me
        </motion.h1>

        <motion.p
          className="text-lg mb-6 text-gray-700 text-justify"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hello, I’m Shiv Kumar, a passionate MERN Stack Developer with a strong focus on creating scalable, efficient, and user-friendly web applications. My journey in web development started with a curiosity for how things work under the hood, and it quickly grew into a love for crafting high-quality, dynamic web solutions. I specialize in MongoDB, Express.js, React, and Node.js, and I have hands-on experience building everything from responsive front-end designs to complex back-end systems.
        </motion.p>

        {/* Education Section */}
        <motion.h3
          className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HiAcademicCap className="text-black" />
          Education
        </motion.h3>

        <motion.p
          className="text-lg text-gray-700 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Bachelor of Technology in Computer Science.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          K L E F Deemed To Be University — Guntur, Andhra Pradesh
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Graduation Year — 2024
        </motion.p>

        {/* Location Section */}
        <motion.div
          className="flex items-center gap-4 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HiLocationMarker className="text-black" />
          <span>Location: Guntur, Andhra Pradesh</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
