import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiOutlineDownload } from "react-icons/hi";
import { FaTools } from 'react-icons/fa'; // Importing an icon
import { FaInfoCircle } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
// Rest of your code remains the same

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        className="w-full p-6 lg:p-8 flex justify-between items-center"
      >
       <div className="lg:pl-20 flex items-center gap-2">
  <motion.div
    className="text-3xl font-semibold text-gray-800 hover:text-gray-900 transition-all duration-200"
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-green-600">🐼</span> Shiv Kumar
  </motion.div>
</div>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-lg font-medium text-gray-600">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
                className="flex items-center gap-2 hover:text-black transition-all duration-200"
              >
                <FaTools/> 
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Exp"
                onClick={(e) => handleScroll(e, "Exp")}
                className="flex items-center gap-2 hover:text-black transition-all duration-200"
              >
               <FaBriefcase />
                Experience
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="flex items-center gap-2 hover:text-black transition-all duration-200"
              >
                <FaInfoCircle />
                About Me
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleScroll(e, "project")}
                className="flex items-center gap-2 hover:text-black transition-all duration-200"
              >
                <FaProjectDiagram  /> 
                Project
              </a>
            </li>
            
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <div
            onClick={toggleMenu}
            className="text-xl cursor-pointer font-semibold text-gray-800"
          >
            {menuOpen ? <HiX /> : <HiMenu />} {/* Toggle between icons */}
          </div>

          {menuOpen && (
            <div className="absolute top-16 left-0 bg-white w-full p-4 shadow-lg z-10">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => {
                      handleScroll(e, "skills");
                      setMenuOpen(false);
                    }}
                    className="block hover:text-black transition-all duration-200"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      handleScroll(e, "about");
                      setMenuOpen(false);
                    }}
                    className="block hover:text-black transition-all duration-200"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    onClick={(e) => {
                      handleScroll(e, "project");
                      setMenuOpen(false);
                    }}
                    className="block hover:text-black transition-all duration-200"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#Exp"
                    onClick={(e) => {
                      handleScroll(e, "Exp");
                      setMenuOpen(false);
                    }}
                    className="block hover:text-black transition-all duration-200"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1ybCEpBGWbRkb-cK1gn2C7tQgOaeb5Raq/view?usp=sharing"
          whileHover={{ scale: 1.05 }}
          className="lg:flex items-center bg-gray-800 p-2 text-white rounded mr-20 hidden "
          target="_blank"
        >
          Resume
          <HiOutlineDownload className="ml-2" /> {/* Adding download icon */}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
