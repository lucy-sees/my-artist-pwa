// Hero.tsx
"use client";
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy">
      {/* Starry Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} color="#00f0ff" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8a2be2" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="text-center relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Headline */}
        <h1
          className="text-8xl font-bungee mb-6 animate-pulse-slow"
          style={{
            color: '#00f0ff',
            textShadow: `
              0 0 10px #00f0ff,
              0 0 20px #00f0ff,
              0 0 30px #00f0ff,
              0 0 40px #ff00ff,
              0 0 70px #ff00ff,
              0 0 80px #ff00ff,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000
            `,
          }}
        >
          WELCOME TO THE HIVE
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-3xl font-space-mono mb-12 text-neon-pink"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          INDEPENDENT HIP-HOP ENERGY
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-electric-purple text-white px-8 py-4 rounded-full font-bungee text-2xl shadow-neon hover:shadow-neon-hover transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: `
              0 0 15px #8a2be2,
              inset 0 0 10px #9400d3
            `,
            textShadow: '0 0 5px rgba(255, 255, 255, 0.8)', // Subtle text shadow for better visibility
          }}
        >
          BLAST THE BEATS
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;