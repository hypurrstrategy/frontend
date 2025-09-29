import styled, { keyframes } from 'styled-components';

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 1rem;
  }
`;

// Skeleton shimmer
const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const Skeleton = styled.div`
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
  background-size: 200% 100%;
  animation: ${shine} 1.2s linear infinite;
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : '16px')};
`; 

export const WalletSection = styled.div`
  margin-bottom: 2rem;
`;

export const ConnectButton = styled.button`
  background: linear-gradient(135deg, #20A67D 0%, #51D2C1 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(32, 166, 125, 0.4);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StatCard = styled.div`
  text-align: center;
`;

export const StatTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

export const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const NextNFTSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  min-height: 320px;
`;

export const NFTCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(32, 166, 125, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(32, 166, 125, 0.6);
    box-shadow: 0 20px 40px rgba(32, 166, 125, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const NFTImage = styled.div`
  width: 200px;
  height: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 15px;
  overflow: hidden;
  border: 3px solid #20A67D;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 150px;
    height: 150px;
    aspect-ratio: 1 / 1;
  }
`;

export const NFTInfo = styled.div`
  flex: 1;
`;

export const NFTName = styled.h3`
  font-size: 1.8rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const NFTPrice = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #20A67D;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const BuyButton = styled.button`
  background: linear-gradient(135deg, #20A67D 0%, #51D2C1 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(32, 166, 125, 0.4);
  }
`;

export const ProgressSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ProgressTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(32, 166, 125, 0.2);
  border-radius: 6px;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.md} 0;
  border: 1px solid rgba(32, 166, 125, 0.3);
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #20A67D, #51D2C1, #F59E0B);
  transition: width 0.5s ease;
  border-radius: 6px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export const ProgressText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const HistorySection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  min-height: 420px;
`;

export const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const HistoryCard = styled.div`
  /* Styled via GlowCard */
`;

export const HistoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HistoryList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(32, 166, 125, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(32, 166, 125, 0.5);
    border-radius: 3px;
  }
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(32, 166, 125, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(32, 166, 125, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #8B9499;

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(32, 166, 125, 0.3);
    border-top: 3px solid #20A67D;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  p {
    margin: 0;
    font-size: 1.1rem;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #8B9499;

  h3 {
    color: #FF6B6B;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;
