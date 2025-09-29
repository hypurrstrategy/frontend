import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import Button from '../Button/Button';
import { openTwitterShare } from '../../utils/twitterShare';
import {
  MissionContainer,
  MissionTitle,
  MissionDescription,
  MissionStats,
  MissionCTA,
} from './Mission.styles';

const Mission = () => {
  const handleGetStarted = () => {
    openTwitterShare();
  };

  const handleLearnMore = () => {
    // Scroll to how it works or show more info
    const howItWorksSection = document.querySelector('.how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section variant="dark">
      <MissionContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <MissionTitle>The mission:</MissionTitle>
          <MissionTitle style={{ color: '#20A67D' }}>Optimize DeFi Yields</MissionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MissionDescription>
            So far, the machine has optimized these strategies:
          </MissionDescription>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MissionStats>
            <div style={{ 
              padding: '2rem', 
              background: 'rgba(32, 166, 125, 0.1)', 
              borderRadius: '8px',
              border: '1px solid rgba(32, 166, 125, 0.2)',
              textAlign: 'center',
              color: '#8B9499'
            }}>
              No strategies deployed yet - Ready to be the first?
            </div>
          </MissionStats>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MissionCTA>
            <Button 
              variant="primary" 
              size="large"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </MissionCTA>
        </motion.div>
      </MissionContainer>
    </Section>
  );
};

export default Mission;
