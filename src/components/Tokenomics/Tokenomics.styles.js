import styled from 'styled-components';

export const TokenomicsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TokenomicsChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

export const ChartCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

export const TotalSupply = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const TotalLabel = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ChartSegments = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    ${({ theme }) => theme.colors.primary} 0deg 144deg,
    ${({ theme }) => theme.colors.secondary} 144deg 234deg,
    ${({ theme }) => theme.colors.lightGray} 234deg 306deg,
    ${({ theme }) => theme.colors.darkGray} 306deg 360deg
  );
  animation: rotate 10s linear infinite;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const TokenomicsBreakdown = styled.div`
  /* Styled via motion.div */
`;

export const BreakdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(32, 166, 125, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid rgba(32, 166, 125, 0.1);
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateX(5px);
    border-color: rgba(32, 166, 125, 0.3);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const BreakdownColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  flex-shrink: 0;
  
  ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return `background: ${theme.colors.primary};`;
      case 'secondary':
        return `background: ${theme.colors.secondary};`;
      case 'lightGray':
        return `background: ${theme.colors.lightGray};`;
      case 'darkGray':
        return `background: ${theme.colors.darkGray}; border: 1px solid ${theme.colors.lightGray};`;
      default:
        return `background: ${theme.colors.primary};`;
    }
  }}
`;

export const BreakdownContent = styled.div`
  flex: 1;
`;

export const BreakdownTitle = styled.h4`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const BreakdownPercentage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const BreakdownDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.875rem;
  line-height: 1.5;
`;
