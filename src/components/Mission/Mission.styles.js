import styled from 'styled-components';

export const MissionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const MissionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const MissionDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export const MissionStats = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const MissionCTA = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
