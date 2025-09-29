import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
  
  /* Support des couches multiples */
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const HypurrImage = styled.div`
  position: absolute;
  ${({ position }) => position && Object.entries(position).map(([key, value]) => `${key}: ${value}`).join('; ')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  opacity: ${({ opacity }) => opacity || 0.4};
  user-select: none;
  transition: none; /* Pas de transition pour le parallaxe */
  will-change: transform;
  
  /* Effets de profondeur selon la couche */
  ${({ layer, blur }) => {
    switch (layer) {
      case 'back':
        return `
          filter: blur(${blur || 1.5}px) drop-shadow(0 2px 8px rgba(32, 166, 125, 0.1));
          z-index: 1;
        `;
      case 'middle':
        return `
          filter: blur(${blur || 0.8}px) drop-shadow(0 4px 12px rgba(32, 166, 125, 0.15));
          z-index: 2;
        `;
      case 'front':
        return `
          filter: blur(${blur || 0.2}px) drop-shadow(0 6px 16px rgba(32, 166, 125, 0.25));
          z-index: 3;
        `;
      default:
        return `
          filter: blur(0.2px) drop-shadow(0 4px 12px rgba(32, 166, 125, 0.2));
          z-index: 2;
        `;
    }
  }}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    opacity: 0.8;
    transition: opacity 0.4s ease;
  }

  /* Effet de glow très subtil */
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: radial-gradient(
      circle,
      rgba(32, 166, 125, 0.1) 0%,
      rgba(81, 210, 193, 0.05) 40%,
      transparent 70%
    );
    border-radius: 50%;
    z-index: -1;
    animation: subtle-glow 6s ease-in-out infinite;
  }

  @keyframes subtle-glow {
    0%, 100% { 
      opacity: 0.3; 
      transform: scale(1); 
    }
    50% { 
      opacity: 0.5; 
      transform: scale(1.02); 
    }
  }

  /* Responsive - ajustement par couche */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ size }) => size * 0.8}px;
    height: ${({ size }) => size * 0.8}px;
    
    ${({ layer }) => {
      switch (layer) {
        case 'back':
          return 'opacity: 0.12;';
        case 'middle':
          return 'opacity: 0.25;';
        case 'front':
          return 'opacity: 0.38;';
        default:
          return 'opacity: 0.25;';
      }
    }}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ size }) => size * 0.6}px;
    height: ${({ size }) => size * 0.6}px;
    
    ${({ layer }) => {
      switch (layer) {
        case 'back':
          return 'opacity: 0.08;';
        case 'middle':
          return 'opacity: 0.18;';
        case 'front':
          return 'opacity: 0.28;';
        default:
          return 'opacity: 0.18;';
      }
    }}
  }
  
  /* Extra small screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: ${({ size }) => size * 0.5}px;
    height: ${({ size }) => size * 0.5}px;
    
    ${({ layer }) => {
      switch (layer) {
        case 'back':
          return 'opacity: 0.05;';
        case 'middle':
          return 'opacity: 0.12;';
        case 'front':
          return 'opacity: 0.20;';
        default:
          return 'opacity: 0.12;';
      }
    }}
  }

  /* Effet hover adapté par couche */
  &:hover {
    ${({ layer, opacity }) => {
      const baseOpacity = opacity || 0.4;
      const hoverMultiplier = layer === 'front' ? 1.3 : layer === 'middle' ? 1.2 : 1.1;
      return `opacity: ${Math.min(baseOpacity * hoverMultiplier, 0.7)};`;
    }}
    transition: opacity 0.3s ease;
    transform: translateZ(10px);
  }
`;


