import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaTelegram, FaMedium, FaGithub } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterCopyright,
  FooterLegal,
} from './Footer.styles';

const Footer = () => {
  const footerColumns = [
    {
      title: '',
      links: [
        { name: 'HyperLiquid', path: 'https://hyperliquid.xyz' },
      ],
    },
  ];

  return (
    <FooterContainer
      as={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <FooterContent>
          <FooterLinks>
            {footerColumns[0].links.map((link, index) => (
              <FooterLink
                key={link.name}
                as={link.path.startsWith('http') ? 'a' : Link}
                to={link.path.startsWith('http') ? undefined : link.path}
                href={link.path.startsWith('http') ? link.path : undefined}
                target={link.path.startsWith('http') ? '_blank' : undefined}
                rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </FooterLink>
            ))}
          </FooterLinks>

          <FooterDescription style={{ marginTop: '1rem' }}>
            Hypurr Strategy is not affiliated with the official HyperLiquid
          </FooterDescription>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            © 2025 Hypurr Strategy. All rights reserved.
          </FooterCopyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
