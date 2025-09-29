import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaDiscord, FaTwitter, FaTelegram, FaMedium, FaGithub, FaChartLine } from 'react-icons/fa';
import Button from '../Button/Button';
import Section from '../Section/Section';
import { openTwitterShare } from '../../utils/twitterShare';
import {
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtons,
  SocialLinks,
  SocialLink,
} from './FinalCTA.styles';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleShareOnX = () => {
    openTwitterShare();
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaDiscord />, href: '#', label: 'Discord' },
    { icon: <FaTelegram />, href: '#', label: 'Telegram' },
    { icon: <FaMedium />, href: '#', label: 'Medium' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section variant="gradient">
      <CTAContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <CTATitle>Ready to Join the Revolution?</CTATitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CTADescription>
            Start earning superior yields with Hypurr Strategy today.
            <br />
            Join thousands of users maximizing their DeFi potential.
          </CTADescription>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CTAButtons>
            <Button 
              variant="secondary" 
              size="medium" 
              icon={<FaChartLine />}
              onClick={handleGoToDashboard}
            >
              Open App
            </Button>
            <Button variant="outline" size="medium" icon={<FaDiscord />}>
              Join Community
            </Button>
          </CTAButtons>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={social.label}
                href={social.href}
                aria-label={social.label}
                as={motion.a}
                variants={socialVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </motion.div>
      </CTAContent>
    </Section>
  );
};

export default FinalCTA;
