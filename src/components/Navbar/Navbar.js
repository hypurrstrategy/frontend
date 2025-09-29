import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTwitter, FaChartLine } from 'react-icons/fa';
import Button from '../Button/Button';
import { openTwitterShare } from '../../utils/twitterShare';
import {
  NavbarContainer,
  NavContent,
  Logo,
  LogoImg,
  LogoText,
  LogoAccent,
  NavMenu,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  EnterAppButton,
} from './Navbar.styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleShareOnX = () => {
    openTwitterShare();
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const navItems = [];

  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [route, anchor] = path.split('#');
      if (route === '' && location.pathname === '/') {
        // Same page anchor
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home then scroll
        window.location.href = path;
      }
    }
  };

  return (
    <NavbarContainer
      as={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      scrolled={scrolled}
    >
      <NavContent>
        <Logo as={Link} to="/">
          <LogoImg src="/hypurrstrategy_logo_without_bg.png" alt="Hypurr paw" />
          <LogoText>HYPURR</LogoText>
          <LogoAccent>STRATEGY</LogoAccent>
        </Logo>

        <NavMenu>
          <EnterAppButton>
            <Button 
              variant="secondary" 
              size="small"
              icon={<FaChartLine />}
              onClick={handleGoToDashboard}
            >
              Open App
            </Button>
          </EnterAppButton>
        </NavMenu>

        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.name}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path.includes('#') ? '/' : item.path}
                  onClick={item.path.includes('#') ? () => handleNavClick(item.path) : undefined}
                >
                  {item.name}
                </Link>
              </MobileNavLink>
            ))}
            
            {/* Dashboard Button pour mobile */}
            <MobileNavLink
              as={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ textAlign: 'center', padding: '0.5rem 1rem' }}
            >
              <Button 
                variant="secondary" 
                size="small"
                icon={<FaChartLine />}
                onClick={handleGoToDashboard}
                style={{ width: '100%' }}
              >
                Dashboard
              </Button>
            </MobileNavLink>
            
            <MobileNavLink
              as={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ textAlign: 'center', padding: '0.5rem 1rem' }}
            >
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
