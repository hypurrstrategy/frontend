import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: 0.75rem;
          min-width: 80px;
          height: 32px;
        `;
      case 'large':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 0.9rem;
          min-width: 120px;
          height: 40px;
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 0.85rem;
          min-width: 100px;
          height: 36px;
        `;
    }
  }}

  /* Color variants */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};

          &:hover:not(:disabled) {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            box-shadow: ${theme.shadows.md};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.lightGray};

          &:hover:not(:disabled) {
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.colors.lightGray};

          &:hover:not(:disabled) {
            color: ${theme.colors.primary};
            background: rgba(32, 166, 125, 0.1);
          }
        `;
      case 'premium':
        return `
          background: linear-gradient(135deg, 
            ${theme.colors.primary} 0%, 
            ${theme.colors.secondary} 50%,
            #51D2C1 100%
          );
          color: ${theme.colors.white};
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          box-shadow: 
            0 4px 16px rgba(32, 166, 125, 0.3),
            0 1px 4px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          background-size: 200% 200%;
          
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
              ${theme.colors.primary}, 
              ${theme.colors.secondary}
            );
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
            filter: blur(8px);
          }

          &:hover:not(:disabled) {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 
              0 8px 24px rgba(32, 166, 125, 0.5),
              0 2px 8px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            background: linear-gradient(135deg, 
              #51D2C1 0%,
              ${theme.colors.primary} 50%,
              ${theme.colors.secondary} 100%
            );
            
            &::before {
              left: 100%;
            }
            
            &::after {
              opacity: 1;
            }
          }
          
          &:active:not(:disabled) {
            transform: translateY(-1px) scale(1.02);
            transition: all 0.1s ease;
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.md};

          &:hover:not(:disabled) {
            filter: brightness(1.1);
            box-shadow: ${theme.shadows.glow};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
`;
