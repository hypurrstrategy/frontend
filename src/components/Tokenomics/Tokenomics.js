import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import {
  TokenomicsContent,
  TokenomicsChart,
  ChartContainer,
  ChartCenter,
  TotalSupply,
  TotalLabel,
  ChartSegments,
  TokenomicsBreakdown,
  BreakdownItem,
  BreakdownColor,
  BreakdownContent,
  BreakdownTitle,
  BreakdownPercentage,
  BreakdownDescription,
} from './Tokenomics.styles';

const Tokenomics = () => {
  const breakdown = [
    {
      title: 'Community & Rewards',
      percentage: '40%',
      description: 'Distributed to community members and strategy participants',
      color: 'primary',
    },
    {
      title: 'Protocol Development',
      percentage: '25%',
      description: 'Funding development and protocol improvements',
      color: 'secondary',
    },
    {
      title: 'Team & Advisors',
      percentage: '20%',
      description: 'Team allocation with vesting schedule',
      color: 'lightGray',
    },
    {
      title: 'Liquidity & Market Making',
      percentage: '15%',
      description: 'Ensuring healthy liquidity across exchanges',
      color: 'darkGray',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <Section
      id="tokenomics"
      title="$HYPSTR Tokenomics"
      subtitle="Utility and distribution of our native token"
      variant="dark"
    >
      <TokenomicsContent>
        <TokenomicsChart
          as={motion.div}
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ChartContainer>
            <ChartCenter>
              <TotalSupply>1B</TotalSupply>
              <TotalLabel>Total Supply</TotalLabel>
            </ChartCenter>
            <ChartSegments />
          </ChartContainer>
        </TokenomicsChart>

        <TokenomicsBreakdown
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {breakdown.map((item, index) => (
            <BreakdownItem
              key={item.title}
              as={motion.div}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <BreakdownColor color={item.color} />
              <BreakdownContent>
                <BreakdownTitle>
                  {item.title}
                  <BreakdownPercentage>{item.percentage}</BreakdownPercentage>
                </BreakdownTitle>
                <BreakdownDescription>{item.description}</BreakdownDescription>
              </BreakdownContent>
            </BreakdownItem>
          ))}
        </TokenomicsBreakdown>
      </TokenomicsContent>
    </Section>
  );
};

export default Tokenomics;
