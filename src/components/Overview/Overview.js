import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import Section from '../Section/Section';
import {
  OverviewContent,
  OverviewText,
  OverviewDescription,
  OverviewStats,
  StatItem,
  StatNumber,
  StatLabel,
  OverviewVisual,
  OverviewIcon,
} from './Overview.styles';

const Overview = () => {
  const [counters, setCounters] = useState({
    apy: 0,
    tvl: 0,
    users: 0,
  });

  const stats = useMemo(() => [
    { key: 'apy', label: 'Average APY', target: 250, suffix: '%' },
    { key: 'tvl', label: 'TVL', target: 50, suffix: 'M+', prefix: '$' },
    { key: 'users', label: 'Users', target: 10, suffix: 'K+' },
  ], []);

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach(stat => {
        let current = 0;
        const increment = stat.target / 60;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('overview-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [stats]);

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section
      id="about"
      title="What is Hypurr Strategy?"
      subtitle="Revolutionizing DeFi through intelligent strategy automation"
      variant="dark"
    >
      <OverviewContent>
        <OverviewText
          as={motion.div}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <OverviewDescription>
            Hypurr Strategy is a cutting-edge DeFi protocol that leverages HyperLiquid's infrastructure 
            to deliver automated yield optimization strategies. Our platform combines advanced algorithms 
            with real-time market analysis to maximize returns while minimizing risk.
          </OverviewDescription>
          
          <OverviewStats id="overview-stats">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.key}
                as={motion.div}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <StatNumber>
                  {stat.prefix || ''}{counters[stat.key]}{stat.suffix}
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </OverviewStats>
        </OverviewText>

        <OverviewVisual
          as={motion.div}
          variants={visualVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <OverviewIcon
            as={motion.div}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FaChartLine />
          </OverviewIcon>
        </OverviewVisual>
      </OverviewContent>
    </Section>
  );
};

export default Overview;
