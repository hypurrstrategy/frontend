import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from './Section.styles';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer
      id={id}
      variant={variant}
      className={className}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      <div className="container">
        {(title || subtitle) && (
          <SectionHeader
            as={motion.div}
            variants={headerVariants}
          >
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </div>
    </SectionContainer>
  );
};

export default Section;
