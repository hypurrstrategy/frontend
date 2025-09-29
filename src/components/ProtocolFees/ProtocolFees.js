import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import {
  FeesContainer,
  FeesTitle,
  FeesStats,
  StatItem,
  StatLabel,
  StatValue,
  FeesDescription,
} from './ProtocolFees.styles';

const ProtocolFees = () => {
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
    <Section variant="default">
      <FeesContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <FeesTitle>Protocol Fees</FeesTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeesStats>
            <StatItem>
              <StatLabel>Total fees collected:</StatLabel>
              <StatValue>0.0Ξ</StatValue>
            </StatItem>
          </FeesStats>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeesDescription>
            Fees on trades are used to power the accumulating machine, with 80% going to the protocol and 20% going to the team. 
            There is a minimum 10% fee on trades. All ETH from strategy yields is used to buy the token and burn it, 
            moving the ETH back into the LP.
          </FeesDescription>
        </motion.div>
      </FeesContainer>
    </Section>
  );
};

export default ProtocolFees;
