import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border-2 border-primary rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-2 border-2 border-primary rounded-lg" />
          <textarea placeholder="Message" className="w-full p-2 border-2 border-primary rounded-lg"></textarea>
          <button className="bg-accent text-black px-6 py-3 rounded-md shadow-lg hover:scale-110 transition-all">
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;