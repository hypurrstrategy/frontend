import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import {
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineTitle,
  TimelineDate,
  TimelineDescription,
  TimelineFeatures,
} from './Roadmap.styles';

const Roadmap = () => {
  const roadmapItems = [
    {
      title: 'Phase 1: Foundation',
      date: 'Q4 2024',
      status: 'completed',
      description: 'Core protocol development, smart contract audits, and initial strategy implementations.',
      features: [
        { text: 'Protocol architecture', completed: true },
        { text: 'Security audits', completed: true },
        { text: 'Basic strategies', completed: true },
      ],
    },
    {
      title: 'Phase 2: Launch',
      date: 'Q1 2025',
      status: 'active',
      description: 'Public launch with governance token distribution and community onboarding.',
      features: [
        { text: 'Token launch', completed: false, inProgress: true },
        { text: 'Governance system', completed: false, inProgress: true },
        { text: 'Community rewards', completed: false, inProgress: false },
      ],
    },
    {
      title: 'Phase 3: Expansion',
      date: 'Q2 2025',
      status: 'pending',
      description: 'Advanced strategies, cross-chain integration, and institutional partnerships.',
      features: [
        { text: 'Cross-chain support', completed: false, inProgress: false },
        { text: 'Advanced strategies', completed: false, inProgress: false },
        { text: 'Institutional tools', completed: false, inProgress: false },
      ],
    },
    {
      title: 'Phase 4: Evolution',
      date: 'Q3 2025',
      status: 'pending',
      description: 'AI-powered strategy optimization and decentralized strategy marketplace.',
      features: [
        { text: 'AI optimization', completed: false, inProgress: false },
        { text: 'Strategy marketplace', completed: false, inProgress: false },
        { text: 'Mobile app', completed: false, inProgress: false },
      ],
    },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getFeatureSymbol = (feature) => {
    if (feature.completed) return '✓';
    if (feature.inProgress) return '◐';
    return '○';
  };

  return (
    <Section
      id="roadmap"
      title="Roadmap"
      subtitle="Our journey to DeFi dominance"
    >
      <Timeline
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {roadmapItems.map((item, index) => (
          <TimelineItem
            key={item.title}
            status={item.status}
            isEven={index % 2 === 1}
            as={motion.div}
            variants={itemVariants}
          >
            <TimelineMarker status={item.status} />
            <TimelineContent status={item.status}>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineDescription>{item.description}</TimelineDescription>
              <TimelineFeatures>
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    {getFeatureSymbol(feature)} {feature.text}
                  </li>
                ))}
              </TimelineFeatures>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Roadmap;
