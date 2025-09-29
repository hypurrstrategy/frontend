import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HypurrBackground from '../../components/HypurrBackground/HypurrBackground';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HypurrBackground />
      <Hero />


      <HowItWorks />
    </motion.main>
  );
};

export default Home;
