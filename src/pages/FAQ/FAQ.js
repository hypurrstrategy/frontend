import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaDiscord, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import {
  FAQContainer,
  FAQCategories,
  CategoryButton,
  FAQContent,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  SupportSection,
  SupportContent,
  SupportLinks,
  SupportLink,
} from './FAQ.styles';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState(new Set(['general-0']));

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'tokenomics', name: 'Tokenomics' },
    { id: 'strategies', name: 'Strategies' },
    { id: 'technical', name: 'Technical' },
  ];

  const faqData = {
    general: [
      {
        question: 'What is Hypurr Strategy?',
        answer: 'Hypurr Strategy is an advanced DeFi protocol built on HyperLiquid that provides automated yield optimization strategies. Our platform uses AI-powered algorithms to maximize returns while minimizing risk across various DeFi protocols.',
      },
      {
        question: 'How does Hypurr Strategy work?',
        answer: 'Our protocol automatically deploys your funds across multiple DeFi strategies based on real-time market analysis. The system continuously monitors and rebalances positions to optimize yields while managing risk through sophisticated algorithms.',
      },
      {
        question: 'Is Hypurr Strategy safe to use?',
        answer: 'Security is our top priority. Our smart contracts have been audited by leading security firms, and we implement multiple layers of risk management. However, as with all DeFi protocols, there are inherent risks including smart contract risk, market volatility, and potential impermanent loss.',
      },
    ],
    tokenomics: [
      {
        question: 'What is the $HYPSTR token?',
        answer: '$HYPSTR is the native governance token of the Hypurr Strategy protocol. It allows holders to participate in protocol governance, earn rewards from protocol fees, and access premium strategy features.',
      },
      {
        question: 'What is the total supply of $HYPSTR?',
        answer: 'The total supply of $HYPSTR is 1 billion tokens. The distribution is: 40% for community and rewards, 25% for protocol development, 20% for team and advisors (with vesting), and 15% for liquidity and market making.',
      },
      {
        question: 'How can I earn $HYPSTR tokens?',
        answer: 'You can earn $HYPSTR through: providing liquidity to protocol strategies, participating in governance voting, referring new users, contributing to protocol development, and participating in community events and campaigns.',
      },
    ],
    strategies: [
      {
        question: 'What types of strategies does Hypurr Strategy offer?',
        answer: 'We offer various strategies including yield farming optimization, liquidity provision strategies, arbitrage opportunities, lending protocols optimization, and delta-neutral strategies. Each strategy is designed to maximize returns while managing specific risk profiles.',
      },
      {
        question: 'How are strategies selected and optimized?',
        answer: 'Our AI algorithms continuously analyze market conditions, yield opportunities, and risk factors across multiple DeFi protocols. Strategies are automatically selected and rebalanced based on real-time data to optimize risk-adjusted returns.',
      },
      {
        question: 'What is the minimum deposit amount?',
        answer: 'There is no minimum deposit amount for most strategies, making Hypurr Strategy accessible to users of all sizes. However, some advanced strategies may have minimum thresholds to ensure efficient execution and cost-effectiveness.',
      },
    ],
    technical: [
      {
        question: 'Which blockchain does Hypurr Strategy use?',
        answer: 'Hypurr Strategy is built on HyperLiquid, leveraging its high-performance infrastructure for optimal execution speed and minimal slippage. We plan to expand to other chains in future phases of our roadmap.',
      },
      {
        question: 'How do I connect my wallet?',
        answer: 'You can connect your wallet through our dApp interface. We support all major HyperLiquid-compatible wallets. Simply click "Connect Wallet" and follow the prompts to securely link your wallet to the protocol.',
      },
      {
        question: 'Are the smart contracts audited?',
        answer: 'Yes, all our smart contracts have been thoroughly audited by reputable security firms. Audit reports are publicly available in our documentation. We also maintain a bug bounty program to incentivize security research.',
      },
    ],
  };

  const toggleItem = (itemId) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const supportLinks = [
    { icon: <FaDiscord />, href: '#', label: 'Join Discord' },
    { icon: <FaTwitter />, href: '#', label: 'Follow us on Twitter' },
    { icon: <FaEnvelope />, href: '/contact', label: 'Contact Us' },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section
        title="Frequently Asked Questions"
        subtitle="Get answers to the most common questions about Hypurr Strategy and the $HYPSTR token."
        variant="gradient"
      >
        <FAQContainer>
          <FAQCategories>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                as={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </CategoryButton>
            ))}
          </FAQCategories>

          <FAQContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {faqData[activeCategory].map((item, index) => {
                  const itemId = `${activeCategory}-${index}`;
                  const isOpen = openItems.has(itemId);

                  return (
                    <FAQItem key={itemId}>
                      <FAQQuestion
                        onClick={() => toggleItem(itemId)}
                        as={motion.div}
                        whileHover={{ backgroundColor: 'rgba(32, 166, 125, 0.05)' }}
                      >
                        <h3>{item.question}</h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown />
                        </motion.div>
                      </FAQQuestion>
                      <AnimatePresence>
                        {isOpen && (
                          <FAQAnswer
                            as={motion.div}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{item.answer}</p>
                          </FAQAnswer>
                        )}
                      </AnimatePresence>
                    </FAQItem>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </FAQContent>
        </FAQContainer>
      </Section>

      <SupportSection variant="dark">
        <div className="container">
          <SupportContent>
            <h2>Still have questions?</h2>
            <p>Our community and support team are here to help. Join our Discord or reach out through our official channels.</p>
            <SupportLinks>
              {supportLinks.map((link, index) => (
                <SupportLink
                  key={link.label}
                  href={link.href}
                  as={motion.a}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {link.icon}
                  {link.label}
                </SupportLink>
              ))}
            </SupportLinks>
          </SupportContent>
        </div>
      </SupportSection>
    </motion.main>
  );
};

export default FAQ;
