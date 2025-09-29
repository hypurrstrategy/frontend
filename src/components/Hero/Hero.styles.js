import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  overflow: hidden;
  padding: 70px 0 ${({ theme }) => theme.spacing.xl};
  
  /* Subtle gradient overlay pour plus de profondeur */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(14, 26, 30, 0.3) 0%,
      transparent 30%,
      transparent 70%,
      rgba(14, 26, 30, 0.2) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 15;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
  
  /* Subtle glow effect pour plus de premium */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 600px;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      ellipse,
      rgba(32, 166, 125, 0.08) 0%,
      rgba(81, 210, 193, 0.04) 40%,
      transparent 70%
    );
    z-index: -1;
    pointer-events: none;
    animation: subtle-pulse 4s ease-in-out infinite;
  }
  
  @keyframes subtle-pulse {
    0%, 100% { 
      opacity: 0.5; 
      transform: translate(-50%, -50%) scale(1); 
    }
    50% { 
      opacity: 0.8; 
      transform: translate(-50%, -50%) scale(1.05); 
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
    
    &::before {
      width: 600px;
      height: 400px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
    
    &::before {
      width: 400px;
      height: 300px;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  /* Subtle text shadow pour plus de profondeur */
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

export const TitleMain = styled.span`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-weight: 400;
  opacity: 0.9;
`;

export const TitleStrategy = styled.span`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.secondary} 50%,
    #51D2C1 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  font-weight: 800;
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  
  /* Simple glow effect */
  text-shadow: 
    0 0 10px rgba(32, 166, 125, 0.4),
    0 0 20px rgba(32, 166, 125, 0.2);
  
  /* Animation shimmer */
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
  
  /* Fallback for browsers that don't support background-clip */
  @supports not (background-clip: text) {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
    -webkit-text-fill-color: initial;
  }
  
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;


export const HeroDescription = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    max-width: 100%;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  
  button {
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary} 0%, 
      ${({ theme }) => theme.colors.secondary} 50%,
      #51D2C1 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 6px 20px rgba(32, 166, 125, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-size: 200% 200%;
    min-width: 140px;
    height: 48px;
    
    /* Double layer effet */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent
      );
      transition: left 0.8s ease;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.primary}, 
        ${({ theme }) => theme.colors.secondary}
      );
      border-radius: 8px;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
      filter: blur(8px);
    }
    
    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 
        0 8px 24px rgba(32, 166, 125, 0.5),
        0 2px 8px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      background: linear-gradient(135deg, 
        #51D2C1 0%,
        ${({ theme }) => theme.colors.primary} 50%,
        ${({ theme }) => theme.colors.secondary} 100%
      );
      
      &::before {
        left: 100%;
      }
      
      &::after {
        opacity: 1;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.02);
      transition: all 0.1s ease;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    button {
      font-size: 0.9rem;
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
      min-width: 120px;
      height: 40px;
    }
  }
`;

