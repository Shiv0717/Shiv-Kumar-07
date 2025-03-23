import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-screen bg-gray-200 fixed top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-10 h-10 bg-blue-600 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
      <motion.p
        className="mt-4 text-lg text-gray-800 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Loading;
