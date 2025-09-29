import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  background: transparent;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 10; /* Au-dessus du background parallaxe */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.primary});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;
