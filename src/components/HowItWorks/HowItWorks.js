import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import {
  WorksContainer,
  WorksTitle,
  WorksSubtitle,
  StepsContainer,
  StepItem,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  CTAContainer,
} from './HowItWorks.styles';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const steps = [
    {
      number: "1st",
      title: "",
      description: "10% of each trade of $HYPSTR is taken as a fee and stored in the protocol (minus 2% rake)"
    },
    {
      number: "2nd", 
      title: "",
      description: "When there's enough fees in the pool, the machine buys a floor hypurr"
    },
    {
      number: "3rd",
      title: "",
      description: "The hypurr automatically gets listed for 1.2x the price"
    },
    {
      number: "4th",
      title: "",
      description: "When the hypurr is sold, all of the HYPE buys and burns $HYPSTR"
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      },
    }),
  };

  return (
    <Section variant="default">
      <WorksContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <WorksTitle>We called it,</WorksTitle>
          <WorksSubtitle>The HyperYoyo™</WorksSubtitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p style={{ 
            color: '#8B9499', 
            fontSize: '1.125rem', 
            textAlign: 'center', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            A simple mechanism for buying and selling Hypurr while burning token supply, forever.
          </p>
        </motion.div>

        <StepsContainer>
          {steps.map((step, index) => (
            <StepItem
              key={step.number}
              as={motion.div}
              variants={boxVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                {step.title && <StepTitle>{step.title}</StepTitle>}
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepItem>
          ))}
        </StepsContainer>

        <motion.div variants={itemVariants}>
          <CTAContainer>
            <Button 
              variant="premium" 
              size="medium"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </CTAContainer>
        </motion.div>
      </WorksContainer>
    </Section>
  );
};

export default HowItWorks;
