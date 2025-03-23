import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="text-lg font-semibold">
          &copy; 2025 <span className="text-gray-400">Shiv Kumar. All Rights Reserved.</span>
        </p>
        <p className="mt-2 text-md text-gray-300">
          Crafted with <span className="text-red-500">&hearts;</span> by <strong className="font-bold text-white">Shiv Kumar</strong>
        </p>
        <div className="mt-4 text-gray-400 text-sm">
          <p>Follow me on:</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="https://x.com/theshiv11" target='_blank' className="hover:text-red-500">
              Twitter
            </a>
            <a href="https://github.com/Shiv0717" target='_blank' className="hover:text-red-500">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/u-shiv-kumar-625376219/" target='_blank' className="hover:text-red-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
