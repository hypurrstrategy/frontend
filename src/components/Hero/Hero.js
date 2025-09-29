import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaChartLine } from 'react-icons/fa';
import Button from '../Button/Button';
import { openTwitterShare } from '../../utils/twitterShare';
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  TitleMain,
  TitleStrategy,
  HeroDescription,
  HeroCTA,
} from './Hero.styles';

const Hero = () => {
  const navigate = useNavigate();

  const handleShareOnX = () => {
    openTwitterShare();
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroContent>
          <motion.div variants={itemVariants}>
            <HeroTitle>
              <TitleMain>Welcome to</TitleMain>
              <TitleStrategy>The Perpetual Hypurr Machine™</TitleStrategy>
            </HeroTitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroDescription>
              An automated protocol designed to get exposure to Hypurr, forever.
            </HeroDescription>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroCTA>
              <Button 
                variant="secondary" 
                size="medium"
                icon={<FaChartLine />}
                onClick={handleGoToDashboard}
              >
                Open App
              </Button>
            </HeroCTA>
          </motion.div>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
