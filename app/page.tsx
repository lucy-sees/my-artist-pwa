"use client";

import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Music from '@/components/Home/Music';
import Videos from '@/components/Home/Videos';
import Merchandise from '@/components/Home/Merchandise';
import Contact from '@/components/Home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Music />
      <Videos />
      <Merchandise />
      <Contact />
    </>
  );
}