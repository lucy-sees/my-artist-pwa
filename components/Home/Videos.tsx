import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <section id="videos" className="py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">My Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Videos;