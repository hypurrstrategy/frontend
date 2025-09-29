import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import apiService from '../../services/apiService';

const HistoryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HistoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HistoryTitle = styled.h1`
  font-size: 2.5rem;
  color: #20A67D;
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
`;

const HistorySubtitle = styled.p`
  font-size: 1.2rem;
  color: #B0B0B0;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #20A67D;
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #20A67D;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #B0B0B0;
`;

const TransactionList = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #333;
  border-radius: 15px;
  overflow: hidden;
`;

const TransactionHeader = styled.div`
  background: #20A67D;
  color: white;
  padding: 1rem 1.5rem;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;

const TransactionItem = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #333;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a2a2a;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TransactionType = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${props => props.type === 'purchase' ? '#20A67D' : '#FF6B6B'};
  color: white;
`;

const Price = styled.span`
  font-weight: bold;
  color: #20A67D;
`;

const Address = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #B0B0B0;
`;

const Timestamp = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #20A67D;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #FF6B6B;
  font-size: 1.1rem;
`;

const RefreshButton = styled.button`
  background: linear-gradient(135deg, #20A67D 0%, #1a8a6b 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(32, 166, 125, 0.3);
  }
`;

const History = () => {
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [historyResponse, statsResponse] = await Promise.all([
        apiService.getTransactionHistory(),
        apiService.getCollectionStats()
      ]);

      setHistory(historyResponse.data || []);
      setStats(statsResponse.data || {});
    } catch (err) {
      console.error('Error fetching history data:', err);
      setError('Failed to load transaction history');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (loading) {
    return (
      <HistoryContainer>
        <LoadingSpinner>Loading transaction history...</LoadingSpinner>
      </HistoryContainer>
    );
  }

  if (error) {
    return (
      <HistoryContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <RefreshButton onClick={fetchData}>Retry</RefreshButton>
      </HistoryContainer>
    );
  }

  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryTitle>Transaction History</HistoryTitle>
        <HistorySubtitle>Recent purchases and sales in the Hypurr ecosystem</HistorySubtitle>
        <RefreshButton onClick={fetchData}>Refresh</RefreshButton>
      </HistoryHeader>

      {stats && (
        <StatsGrid>
          <StatCard>
            <StatValue>{stats.totalListed}</StatValue>
            <StatLabel>NFTs Listed</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.cheapestPrice} ETH</StatValue>
            <StatLabel>Cheapest Price</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.averagePrice} ETH</StatValue>
            <StatLabel>Average Price</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.totalVolume24h} ETH</StatValue>
            <StatLabel>24h Volume</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.totalTransactions}</StatValue>
            <StatLabel>Total Transactions</StatLabel>
          </StatCard>
        </StatsGrid>
      )}

      <TransactionList>
        <TransactionHeader>
          <div>Type</div>
          <div>Token ID</div>
          <div>Price</div>
          <div>Address</div>
          <div>Time</div>
        </TransactionHeader>
        
        {history.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
            No transactions found
          </div>
        ) : (
          history.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TransactionItem>
                <TransactionType type={transaction.type}>
                  {transaction.type}
                </TransactionType>
                <div>#{transaction.tokenId}</div>
                <Price>{transaction.price} ETH</Price>
                <Address>{formatAddress(transaction.buyer || transaction.seller)}</Address>
                <Timestamp>{formatTimestamp(transaction.timestamp)}</Timestamp>
              </TransactionItem>
            </motion.div>
          ))
        )}
      </TransactionList>
    </HistoryContainer>
  );
};

export default History;
