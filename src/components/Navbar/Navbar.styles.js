import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(14, 26, 30, 0.95);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(32, 166, 125, 0.3);
  z-index: 200; /* Au-dessus du background parallaxe */
  transition: ${({ theme }) => theme.transitions.medium};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: scale(1.05);
    
    /* Glow effect on hover */
    filter: drop-shadow(0 0 8px rgba(32, 166, 125, 0.4));
  }
  
  &:active {
    transform: scale(1.02);
  }
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  display: block;
`;

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoAccent = styled.span`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.secondary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const EnterAppButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* Style compact et carré pour le bouton dans la navbar */
  button {
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary} 0%, 
      ${({ theme }) => theme.colors.secondary} 50%,
      #51D2C1 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 0.8rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 4px 12px rgba(32, 166, 125, 0.3),
      0 1px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    background-size: 200% 200%;
    min-width: 90px;
    height: 32px;
    
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
      transition: left 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 
        0 6px 20px rgba(32, 166, 125, 0.5),
        0 2px 8px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      background: linear-gradient(135deg, 
        #51D2C1 0%,
        ${({ theme }) => theme.colors.primary} 50%,
        ${({ theme }) => theme.colors.secondary} 100%
      );
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.02);
      transition: all 0.1s ease;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.div`
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.lightGray
  };
  font-weight: 400;
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.deepBlack};
  border-top: 1px solid rgba(32, 166, 125, 0.2);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileNavLink = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid rgba(32, 166, 125, 0.1);

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 400;
    transition: ${({ theme }) => theme.transitions.fast};
    display: block;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;
