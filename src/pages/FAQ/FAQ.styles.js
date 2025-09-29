import styled from 'styled-components';

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQCategories = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  justify-content: center;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'rgba(32, 166, 125, 0.3)'
  };
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.white : theme.colors.lightGray
  };
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ active, theme }) => 
      active ? theme.colors.white : theme.colors.primary
    };
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    font-size: 0.875rem;
  }
`;

export const FAQContent = styled.div`
  /* Styled via motion.div */
`;

export const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 1px solid rgba(32, 166, 125, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkGray};
`;

export const FAQQuestion = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitions.fast};

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25rem;
  }

  &:hover {
    background: rgba(32, 166, 125, 0.05);
  }
`;

export const FAQAnswer = styled.div`
  overflow: hidden;

  p {
    padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.lightGray};
    line-height: 1.6;
    margin: 0;
  }
`;

export const SupportSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  background: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
`;

export const SupportContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SupportLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const SupportLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.deepBlack};
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid rgba(32, 166, 125, 0.2);
  transition: ${({ theme }) => theme.transitions.medium};
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    font-size: 1.25rem;
  }
`;
