import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid rgba(32, 166, 125, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 32px rgba(32, 166, 125, 0.3);
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    ${({ glowColor }) => glowColor}15 0%,
    transparent 50%,
    ${({ glowColor }) => glowColor}10 100%
  );
  opacity: ${({ intensity }) => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'high': return 0.8;
      default: return 0.5;
    }
  }};
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${CardContainer}:hover & {
    opacity: ${({ intensity }) => {
      switch (intensity) {
        case 'low': return 0.5;
        case 'high': return 1;
        default: return 0.7;
      }
    }};
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.xl};
`;
