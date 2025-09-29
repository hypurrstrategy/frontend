import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.deepBlack};
  border-top: 1px solid rgba(32, 166, 125, 0.2);
  padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.lg};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const FooterBrand = styled.div`
  max-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid rgba(32, 166, 125, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.medium};
  font-size: 1.25rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const FooterColumn = styled.div`
  /* Styled via motion.div */
`;

export const FooterTitle = styled.h4`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterList = styled.ul`
  list-style: none;

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(32, 166, 125, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterLegal = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;
