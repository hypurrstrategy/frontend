import styled from 'styled-components';

export const CollectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CollectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #51D2C1 0%, #20A67D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const RefreshButton = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CollectionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #51D2C1;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #8B9499;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CollectionSummary = styled.div`
  margin-bottom: 2rem;
`;

export const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const NFTCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(81, 210, 193, 0.3);
    box-shadow: 0 20px 40px rgba(81, 210, 193, 0.1);
  }
`;

export const NFTImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${NFTCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const NFTInfo = styled.div`
  padding: 1.5rem;
`;

export const NFTName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 1rem 0;
`;

export const NFTPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.9rem;
    color: #8B9499;
  }
`;

export const NFTStatus = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => props.color}20;
  color: ${props => props.color};
  border: 1px solid ${props => props.color}40;
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
    border: 3px solid rgba(81, 210, 193, 0.3);
    border-top: 3px solid #51D2C1;
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

// Responsive design
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${CollectionHeader} {
      flex-direction: column;
      align-items: stretch;
      text-align: center;
    }

    ${CollectionTitle} {
      font-size: 2rem;
    }

    ${NFTGrid} {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    ${CollectionStats} {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    ${CollectionContainer} {
      padding: 1rem;
    }

    ${CollectionTitle} {
      font-size: 1.75rem;
    }

    ${CollectionStats} {
      grid-template-columns: 1fr;
    }

    ${StatValue} {
      font-size: 1.5rem;
    }
  }
`;
