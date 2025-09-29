import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCurrentUserCount } from '../../utils/twitterShare';
import {
  CounterContainer,
  CounterLabel,
  CounterNumber,
} from './UserCounter.styles';

const UserCounter = ({ className }) => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setUserCount(getCurrentUserCount());
    };

    // Update count on mount
    updateCount();

    // Listen for storage changes (when user clicks Enter App)
    const handleStorageChange = (e) => {
      if (e.key === 'hypurr_user_id') {
        updateCount();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for local changes (same tab)
    const interval = setInterval(updateCount, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <CounterContainer
      className={className}
      as={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CounterLabel>Hypurr Users</CounterLabel>
      <CounterNumber
        as={motion.div}
        key={userCount}
        initial={{ scale: 1.2, color: '#51D2C1' }}
        animate={{ scale: 1, color: '#20A67D' }}
        transition={{ duration: 0.3 }}
      >
        #{userCount || 1}
      </CounterNumber>
    </CounterContainer>
  );
};

export default UserCounter;
