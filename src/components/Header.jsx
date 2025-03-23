import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiOutlineDownload } from "react-icons/hi";
import { FaTools, FaInfoCircle, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';

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
        className="w-full p-6 lg:p-8 flex justify-between items-center bg-white shadow-md"
      >
        <div className="lg:pl-14 flex items-center gap-2">
          <motion.div
            className="text-3xl font-bold text-gray-700 hover:text-green-600 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-600">🐼</span> Shiv Kumar
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-lg font-semibold text-gray-600">
          <ul className="flex space-x-6">
            {[{ id: 'skills', label: 'Skills', icon: FaTools },
              { id: 'Exp', label: 'Experience', icon: FaBriefcase },
              { id: 'about', label: 'About Me', icon: FaInfoCircle },
              { id: 'project', label: 'Project', icon: FaProjectDiagram }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-200"
                >
                  <item.icon />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <div
            onClick={toggleMenu}
            className="text-2xl cursor-pointer font-semibold text-gray-700"
          >
            {menuOpen ? <HiX /> : <HiMenu />} 
          </div>

          {menuOpen && (
            <div className="absolute top-16 left-0 bg-white w-full p-4 shadow-lg z-10 rounded-lg">
              <ul className="space-y-4">
                {["skills", "about", "project", "Exp"].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        handleScroll(e, id);
                        setMenuOpen(false);
                      }}
                      className="block text-gray-700 hover:text-green-600 font-medium transition-all duration-200"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1ybCEpBGWbRkb-cK1gn2C7tQgOaeb5Raq/view?usp=sharing"
          whileHover={{ scale: 1.05 }}
          className="lg:flex items-center bg-green-600 p-3 text-white rounded-lg mr-14 hidden font-semibold shadow-lg"
          target="_blank"
        >
          Resume
          <HiOutlineDownload className="ml-2" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;