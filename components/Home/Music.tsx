import { motion } from 'framer-motion';

const Music = () => {
  return (
    <section id="music" className="py-16 bg-secondary text-background">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">My Music</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-4 border-primary p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Album 1</h3>
            <p>Release Date: 2023</p>
          </div>
          <div className="border-4 border-primary p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Single 2</h3>
            <p>Release Date: 2023</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;