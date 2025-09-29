import React from 'react';
import { motion } from 'framer-motion';
import { StyledButton, ButtonIcon } from './Button.styles';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton
      as={motion.button}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {children}
    </StyledButton>
  );
};

export default Button;
