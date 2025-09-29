import React from 'react';
import { motion } from 'framer-motion';
import {
  CardContainer,
  CardGlow,
  CardContent,
} from './GlowCard.styles';

const GlowCard = ({ 
  children, 
  className, 
  glowColor = '#20A67D',
  intensity = 'medium',
  ...props 
}) => {
  return (
    <CardContainer
      className={className}
      as={motion.div}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      {...props}
    >
      <CardGlow glowColor={glowColor} intensity={intensity} />
      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default GlowCard;
