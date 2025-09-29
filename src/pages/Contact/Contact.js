import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section/Section';

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section
        title="Contact Us"
        subtitle="Get in touch with the Hypurr Strategy team."
        variant="gradient"
      >
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h3 style={{ color: '#20A67D', marginBottom: '1rem' }}>
            📧 Contact Form Coming Soon
          </h3>
          <p style={{ color: '#8B9499', fontSize: '1.125rem', lineHeight: '1.6' }}>
            Our contact form is being developed and will be available soon.
            <br />
            In the meantime, join our Discord or follow us on Twitter for updates.
          </p>
        </div>
      </Section>
    </motion.main>
  );
};

export default Contact;
