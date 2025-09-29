import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import apiService from '../../services/apiService';

const CheapestContainer = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 2px solid #20A67D;
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #20A67D, #1a8a6b, #20A67D);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Badge = styled.div`
  background: linear-gradient(135deg, #20A67D 0%, #1a8a6b 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const NFTImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  border-radius: 15px;
  overflow: hidden;
  border: 3px solid #20A67D;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const NFTName = styled.h2`
  font-size: 1.8rem;
  color: #20A67D;
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', monospace;
`;

const PriceContainer = styled.div`
  margin: 1rem 0;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #20A67D;
  margin-bottom: 0.5rem;
`;

const PriceLabel = styled.div`
  font-size: 1rem;
  color: #B0B0B0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const BuyButton = styled.button`
  background: linear-gradient(135deg, #20A67D 0%, #1a8a6b 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(32, 166, 125, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #20A67D;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #333;
  border-top: 4px solid #20A67D;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: #FF6B6B;
  font-size: 1.1rem;
  margin: 2rem 0;
`;

const RefreshButton = styled.button`
  background: transparent;
  color: #20A67D;
  border: 2px solid #20A67D;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #20A67D;
    color: white;
  }
`;

const CheapestNFT = () => {
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCheapestNFT = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiService.getCheapestNFT();
      setNft(response.data);
    } catch (err) {
      console.error('Error fetching cheapest NFT:', err);
      setError('Failed to load cheapest NFT');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCheapestNFT();
  }, []);

  if (loading) {
    return (
      <CheapestContainer>
        <LoadingContainer>
          <LoadingSpinner />
          <div>Finding the cheapest NFT...</div>
        </LoadingContainer>
      </CheapestContainer>
    );
  }

  if (error) {
    return (
      <CheapestContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <RefreshButton onClick={fetchCheapestNFT}>Retry</RefreshButton>
      </CheapestContainer>
    );
  }

  if (!nft) {
    return (
      <CheapestContainer>
        <div style={{ color: '#888', fontSize: '1.2rem' }}>
          No NFTs currently listed for sale
        </div>
        <RefreshButton onClick={fetchCheapestNFT}>Refresh</RefreshButton>
      </CheapestContainer>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CheapestContainer>
        <Badge>🔥 Cheapest NFT</Badge>
        
        <NFTImage>
          <img 
            src={nft.image} 
            alt={nft.name}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/200x200/20A67D/FFFFFF?text=Hypurr+%23${nft.tokenId}`;
            }}
          />
        </NFTImage>

        <NFTName>{nft.name}</NFTName>
        
        <PriceContainer>
          <Price>{nft.buyPrice} ETH</Price>
          <PriceLabel>Current Price</PriceLabel>
        </PriceContainer>

        <BuyButton onClick={() => window.open(nft.externalLink, '_blank')}>
          View on OpenSea
        </BuyButton>

        <RefreshButton onClick={fetchCheapestNFT}>
          Refresh
        </RefreshButton>
      </CheapestContainer>
    </motion.div>
  );
};

export default CheapestNFT;
