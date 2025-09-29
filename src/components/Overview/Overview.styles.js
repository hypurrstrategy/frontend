import styled from 'styled-components';

export const OverviewContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const OverviewText = styled.div`
  /* Styled via motion.div */
`;

export const OverviewDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.7;
`;

export const OverviewStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(32, 166, 125, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid rgba(32, 166, 125, 0.1);
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(32, 166, 125, 0.3);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  font-weight: 600;
`;

export const OverviewVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverviewIcon = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.glow};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    animation: pulse 2s infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
`;
