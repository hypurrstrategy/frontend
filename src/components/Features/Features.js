import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaShieldAlt, 
  FaBolt, 
  FaUsers, 
  FaLayerGroup, 
  FaMobileAlt 
} from 'react-icons/fa';
import Section from '../Section/Section';
import {
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from './Features.styles';

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: 'Automated Strategies',
      description: 'AI-powered automation executes optimal strategies 24/7 without manual intervention.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation protocols protect your investments.',
    },
    {
      icon: <FaBolt />,
      title: 'High Performance',
      description: 'Built on HyperLiquid for lightning-fast execution and minimal slippage.',
    },
    {
      icon: <FaUsers />,
      title: 'Community Driven',
      description: 'Governed by $HYPSTR holders with transparent voting mechanisms.',
    },
    {
      icon: <FaLayerGroup />,
      title: 'Multi-Strategy',
      description: 'Diversified portfolio of strategies across multiple DeFi protocols.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Easy Access',
      description: 'Intuitive interface accessible from any device, anywhere, anytime.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section
      id="features"
      title="Key Features"
      subtitle="Why choose Hypurr Strategy?"
    >
      <FeaturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            as={motion.div}
            variants={cardVariants}
            whileHover={{ 
              y: -5, 
              transition: { duration: 0.3 } 
            }}
          >
            <FeatureIcon>
              {feature.icon}
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Section>
  );
};

export default Features;
