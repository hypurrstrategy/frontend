import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section/Section';

const Documentation = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section
        title="Documentation"
        subtitle="Complete guide to integrating and using Hypurr Strategy protocol."
        variant="gradient"
      >
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h3 style={{ color: '#20A67D', marginBottom: '1rem' }}>
            📚 Documentation Coming Soon
          </h3>
          <p style={{ color: '#8B9499', fontSize: '1.125rem', lineHeight: '1.6' }}>
            Our comprehensive documentation is being prepared and will be available soon.
            <br />
            It will include detailed guides, API references, and integration examples.
          </p>
        </div>
      </Section>
    </motion.main>
  );
};

export default Documentation;
