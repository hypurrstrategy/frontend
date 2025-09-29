import React from 'react';
import { motion } from 'framer-motion';
import {
  BackgroundContainer,
  FloatingOrb,
  GridPattern,
} from './AnimatedBackground.styles';

const AnimatedBackground = () => {
  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <BackgroundContainer>
      <GridPattern />
      {orbs.map((orb) => (
        <FloatingOrb
          key={orb.id}
          as={motion.div}
          size={orb.size}
          initial={{ 
            x: `${orb.x}vw`, 
            y: `${orb.y}vh`,
            scale: 0,
            opacity: 0 
          }}
          animate={{
            x: [`${orb.x}vw`, `${(orb.x + 20) % 100}vw`, `${orb.x}vw`],
            y: [`${orb.y}vh`, `${(orb.y + 30) % 100}vh`, `${orb.y}vh`],
            scale: [0, 1, 0.8, 1],
            opacity: [0, 0.6, 0.3, 0.6],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
