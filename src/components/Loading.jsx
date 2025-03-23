import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full h-screen  fixed top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Panda Icon */}
      <motion.div
        className="text-7xl mb-6"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        🐼
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-2xl text-green-700 font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Loading...
      </motion.p>

      {/* Inspirational Quote with Name */}
      <motion.p
        className="text-lg text-green-600 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        "Crafted with care by Shiv Kumar — Patience is the key to greatness."
      </motion.p>
    </motion.div>
  );
};

export default Loading;
