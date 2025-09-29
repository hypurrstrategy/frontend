import styled from 'styled-components';

export const FeesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const FeesTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FeesStats = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StatItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.125rem;
`;

export const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const FeesDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;
