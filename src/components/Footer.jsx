import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Copyright Section */}
        <p className="text-lg font-semibold">
          &copy; 2025 <span className="text-gray-600">All Rights Reserved.</span>
        </p>

        {/* Crafted By Section */}
        <p className="mt-2 text-md text-gray-700">
          Designed and developed with <span className="text-green-500">&hearts;</span> by <strong className="font-bold text-green-500">Shiv Kumar</strong>
        </p>

        {/* Social Links */}
        <div className="mt-4 text-gray-600 text-sm">
          <p>Connect with me:</p>
          <div className="flex justify-center gap-6 mt-2">
            <a 
              href="https://x.com/theshiv11" 
              target='_blank' 
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/Shiv0717" 
              target='_blank' 
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/u-shiv-kumar-625376219/" 
              target='_blank' 
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
