import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(32, 166, 125, 0.1);
  border: 1px solid rgba(32, 166, 125, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  backdrop-filter: blur(10px);
`;

export const CounterLabel = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

export const CounterNumber = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
`;
