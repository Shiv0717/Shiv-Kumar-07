import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full h-screen bg-gray-200 fixed top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Panda Icon */}
      <motion.div
        className="text-6xl mb-4"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        🐼
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-xl text-gray-800 font-medium mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Loading...
      </motion.p>

      {/* Your Name */}
      <motion.p
        className="text-lg text-gray-600 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Powered by <span className="text-blue-600">{'Shiv Kumar'}</span>
      </motion.p>
    </motion.div>
  );
};

export default Loading;
