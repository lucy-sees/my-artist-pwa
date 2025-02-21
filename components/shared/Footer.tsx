"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-8">
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>&copy; 2025 Artist Name. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;