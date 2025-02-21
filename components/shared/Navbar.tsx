// Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { delay: 0.5, type: 'spring', stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -50 }
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Videos', href: '#videos' },
    { name: 'Merch', href: '#merch' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.button
        className="fixed top-6 right-6 z-50 p-3 mix-blend-difference"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? 'open' : 'closed'}
      >
        <svg width="40" height="40" viewBox="0 0 24 24">
          <motion.path
            stroke="#00f0ff"
            strokeWidth="3"
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M2 6 L22 6 M2 12 L22 12 M2 18 L22 18" },
              open: { d: "M4 4 L20 20 M4 20 L20 4" }
            }}
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 bg-navy/95 backdrop-blur-xl z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}
          >
            <motion.ul className="space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={linkVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-bungee hover:text-neon-pink transition-colors"
                    style={{ textShadow: '0 0 15px rgba(255,0,255,0.5)' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;