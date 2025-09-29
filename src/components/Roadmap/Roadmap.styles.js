import styled from 'styled-components';

export const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  justify-content: ${({ isEven }) => isEven ? 'flex-start' : 'flex-end'};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

export const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 2;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  
  ${({ status, theme }) => {
    switch (status) {
      case 'completed':
        return `background: ${theme.colors.primary};`;
      case 'active':
        return `
          background: ${theme.colors.secondary};
          animation: pulse 2s infinite;
        `;
      default:
        return `background: ${theme.colors.darkGray};`;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 20px;
    transform: translateX(-50%);
  }
`;

export const TimelineContent = styled.div`
  width: calc(50% - 40px);
  background: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  transition: ${({ theme }) => theme.transitions.medium};
  border: 1px solid rgba(32, 166, 125, 0.2);

  ${({ status, theme }) => {
    switch (status) {
      case 'completed':
        return `border-color: ${theme.colors.primary};`;
      case 'active':
        return `
          border-color: ${theme.colors.secondary};
          box-shadow: ${theme.shadows.glow};
        `;
      default:
        return '';
    }
  }}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
`;

export const TimelineDate = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

export const TimelineFeatures = styled.ul`
  list-style: none;

  li {
    color: ${({ theme }) => theme.colors.lightGray};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;
