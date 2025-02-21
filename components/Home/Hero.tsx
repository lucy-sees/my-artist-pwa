import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">Welcome to My World</h1>
        <p className="text-2xl mb-8">I am an independent Hip-Hop Artist.</p>
        <button className="bg-accent text-black px-6 py-3 rounded-md shadow-lg hover:scale-110 transition-all">
          Listen Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;