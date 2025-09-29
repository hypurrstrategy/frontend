import styled from 'styled-components';

export const WorksContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 15;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;


export const WorksTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 400;
  letter-spacing: 0.02em;
  
  /* Subtle text glow */
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
`;

export const WorksSubtitle = styled.h3`
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  
  /* Fix text rendering issues */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  
  /* Clean text shadow for better visibility */
  text-shadow: 
    0 0 15px rgba(32, 166, 125, 0.8),
    0 0 30px rgba(32, 166, 125, 0.6),
    0 0 45px rgba(32, 166, 125, 0.4);
  
  /* Gradient text with better rendering */
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.secondary} 50%,
    #51D2C1 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
  
  /* Clean text without background overlay */
  
  /* Fallback for browsers that don't support background-clip */
  @supports not (background-clip: text) {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
    -webkit-text-fill-color: initial;
  }
  
  @keyframes gradient-shift {
    0%, 100% { 
      background-position: 0% 50%; 
    }
    50% { 
      background-position: 100% 50%; 
    }
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  min-height: 160px;
  text-align: center;
  
  /* Beautiful Compact Box Design Premium */
  background: linear-gradient(145deg, 
    rgba(39, 48, 54, 0.95) 0%,
    rgba(14, 26, 30, 0.98) 60%,
    rgba(32, 166, 125, 0.03) 100%
  );
  border: 1px solid rgba(32, 166, 125, 0.3);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.6),
    0 2px 16px rgba(32, 166, 125, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 15;
  overflow: hidden;
  
  /* Animated border effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(32, 166, 125, 0.4) 0%,
      rgba(81, 210, 193, 0.3) 50%,
      rgba(32, 166, 125, 0.2) 100%
    );
    border-radius: 16px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  /* Glow effect on hover */
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    background: radial-gradient(
      circle,
      rgba(32, 166, 125, 0.2) 0%,
      transparent 70%
    );
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: rgba(32, 166, 125, 0.6);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.8),
      0 8px 32px rgba(32, 166, 125, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
      
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: 140px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: 120px;
  }
`;

export const StepNumber = styled.div`
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  /* Compact Badge Design pour layout vertical */
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.secondary} 100%
  );
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: 20px;
  box-shadow: 
    0 3px 12px rgba(32, 166, 125, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 55px;
    height: 30px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 50px;
    height: 28px;
    font-size: 0.75rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StepContent = styled.div`
  /* Container for step content - Layout vertical compact */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const StepTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const StepDescription = styled.p`
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
  font-size: clamp(0.85rem, 2vw, 1rem);
  font-weight: 400;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  
  /* Amélioration de la lisibilité */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.02em;
  
  /* Layout vertical compact - texte centré */
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    line-height: 1.4;
    font-size: clamp(0.8rem, 2.2vw, 0.95rem);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

export const CTAContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
