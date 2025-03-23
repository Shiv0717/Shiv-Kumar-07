import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import boy2 from '../assets/boy2.png';
import shiv from '../assets/Group 1.png';
import { FaInfoCircle } from 'react-icons/fa';
const About = () => {
  return (
    <motion.div
      className="ml-8 mr-8 flex flex-col items-center lg:ml-25 lg:mr-25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-full flex flex-col items-center lg:flex-row">
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img className="lg:w-[60%] mt-8 mb-8 w-[80%] sm:w-[50%]" src={shiv} alt="Shiv" />
        </motion.div>

        <div className="lg:w-1/2 w-full text-justify px-4 sm:px-8">
          <motion.h1
            className="text-3xl font-semibold mt-6 mb-3"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaInfoCircle className="inline-block mr-2 text-2xl" /> My About
          </motion.h1>

          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
           Hello, I’m Shiv Kumar, a passionate MERN Stack Developer with a strong focus on creating scalable, efficient, and user-friendly web applications. My journey in web development started with a curiosity for how things work under the hood, and it quickly grew into a love for crafting high-quality, dynamic web solutions. I specialize in MongoDB, Express.js, React, and Node.js, and I have hands-on experience building everything from responsive front-end designs to complex back-end systems.
          </motion.p>

          <motion.h3
            className="text-3xl font-semibold mb-3 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HiAcademicCap /> Education
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Bachelor of Technology in Computer Science.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            K L E F Deemed To Be University — Guntur, Andhra Pradesh
          </motion.p>

          <motion.p
            className="pb-6 lg:pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Graduation Year — [2024]
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
