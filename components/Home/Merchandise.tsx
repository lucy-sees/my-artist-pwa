import { motion } from 'framer-motion';

const Merchandise = () => {
  return (
    <section id="merchandise" className="py-16 bg-secondary text-background">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">Merchandise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-4 border-primary p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">T-Shirt</h3>
            <p>$20</p>
          </div>
          <div className="border-4 border-primary p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Hoodie</h3>
            <p>$40</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Merchandise;