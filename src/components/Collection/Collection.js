import React from 'react';
import { motion } from 'framer-motion';
import { useCollection, useCollectionSummary, useProtocolStats } from '../../hooks/useCollection';
import GlowCard from '../GlowCard/GlowCard';
import Button from '../Button/Button';
import apiService from '../../services/apiService';
import {
  CollectionContainer,
  CollectionHeader,
  CollectionTitle,
  CollectionStats,
  StatItem,
  StatValue,
  StatLabel,
  NFTGrid,
  NFTCard,
  NFTImage,
  NFTInfo,
  NFTName,
  NFTPrice,
  NFTStatus,
  LoadingSpinner,
  ErrorMessage,
  RefreshButton,
  CollectionSummary
} from './Collection.styles';

const Collection = () => {
  const { collection, loading, error, refreshCollection } = useCollection();
  const { summary } = useCollectionSummary();
  const { stats: protocolStats } = useProtocolStats();

  const handleRefresh = () => {
    refreshCollection();
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(4) + ' ETH';
  };

  const getStatusColor = (isListed) => {
    return isListed ? '#51D2C1' : '#8B9499';
  };

  const getStatusText = (isListed) => {
    return isListed ? 'Listé' : 'Non listé';
  };

  if (loading && !collection) {
    return (
      <CollectionContainer>
        <LoadingSpinner>
          <div className="spinner" />
          <p>Chargement de la collection...</p>
        </LoadingSpinner>
      </CollectionContainer>
    );
  }

  if (error) {
    return (
      <CollectionContainer>
        <ErrorMessage>
          <h3>Erreur de chargement</h3>
          <p>{error}</p>
          <Button onClick={handleRefresh}>Réessayer</Button>
        </ErrorMessage>
      </CollectionContainer>
    );
  }

  return (
    <CollectionContainer>
      <CollectionHeader>
        <CollectionTitle>Collection Hypurr Strategy</CollectionTitle>
        <RefreshButton>
          <Button 
            variant="secondary" 
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? 'Actualisation...' : 'Actualiser'}
          </Button>
        </RefreshButton>
      </CollectionHeader>

      {/* Collection Summary */}
      {summary && (
        <CollectionSummary>
          <GlowCard intensity="medium">
            <h3>Résumé de la Collection</h3>
            <CollectionStats>
              <StatItem>
                <StatValue>{summary.totalNFTs}</StatValue>
                <StatLabel>Total NFTs</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{summary.listedNFTs}</StatValue>
                <StatLabel>Listés</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{summary.withImages}</StatValue>
                <StatLabel>Avec Images</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{formatPrice(summary.stats.averagePrice)}</StatValue>
                <StatLabel>Prix Moyen</StatLabel>
              </StatItem>
            </CollectionStats>
          </GlowCard>
        </CollectionSummary>
      )}

      {/* Protocol Stats */}
      {protocolStats && (
        <CollectionSummary>
          <GlowCard intensity="high" glowColor="#51D2C1">
            <h3>Statistiques du Protocole</h3>
            <CollectionStats>
              <StatItem>
                <StatValue>{formatPrice(protocolStats.contractBalance)}</StatValue>
                <StatLabel>Balance du Contrat</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{protocolStats.totalHypurrsBought}</StatValue>
                <StatLabel>Hypurrs Achetés</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{protocolStats.totalHypurrsSold}</StatValue>
                <StatLabel>Hypurrs Vendus</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{formatPrice(protocolStats.currentFees)}</StatValue>
                <StatLabel>Frais Actuels</StatLabel>
              </StatItem>
            </CollectionStats>
          </GlowCard>
        </CollectionSummary>
      )}

      {/* NFT Grid */}
      {collection && collection.length > 0 ? (
        <NFTGrid>
          {collection.map((nft) => (
            <motion.div
              key={nft.tokenId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NFTCard>
                <NFTImage>
                  <img 
                    src={nft.localImagePath ? apiService.getLocalImageUrl(nft.tokenId) : nft.image} 
                    alt={nft.name}
                    onError={(e) => {
                      e.target.src = apiService.getPlaceholderUrl(nft.tokenId);
                    }}
                  />
                </NFTImage>
                <NFTInfo>
                  <NFTName>{nft.name}</NFTName>
                  <NFTPrice>
                    <span>Prix d'achat: {formatPrice(nft.buyPrice)}</span>
                    <span>Prix de vente: {formatPrice(nft.sellPrice)}</span>
                  </NFTPrice>
                  <NFTStatus color={getStatusColor(nft.isListed)}>
                    {getStatusText(nft.isListed)}
                  </NFTStatus>
                  {nft.attributes && nft.attributes.length > 0 && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <small>
                        {nft.attributes.length} attribut{nft.attributes.length > 1 ? 's' : ''}
                      </small>
                    </div>
                  )}
                </NFTInfo>
              </NFTCard>
            </motion.div>
          ))}
        </NFTGrid>
      ) : (
        <GlowCard intensity="low">
          <div style={{ textAlign: 'center', color: '#8B9499' }}>
            <h3>Aucun NFT trouvé</h3>
            <p>La collection est vide ou en cours de chargement.</p>
          </div>
        </GlowCard>
      )}
    </CollectionContainer>
  );
};

export default Collection;
