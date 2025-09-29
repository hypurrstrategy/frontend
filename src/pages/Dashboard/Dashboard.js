import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaShoppingCart, FaExternalLinkAlt } from 'react-icons/fa';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import GlowCard from '../../components/GlowCard/GlowCard';
import HypurrBackground from '../../components/HypurrBackground/HypurrBackground';
import { openTwitterShare } from '../../utils/twitterShare';
import apiService from '../../services/apiService';
import config from '../../config/environment';
import { useDashboard } from '../../hooks/useDashboard';
import {
  DashboardContainer,
  StatsGrid,
  StatCard,
  StatTitle,
  StatValue,
  NextNFTSection,
  NFTCard,
  NFTImage,
  NFTInfo,
  NFTName,
  NFTPrice,
  BuyButton,
  
  HistorySection,
  HistoryGrid,
  HistoryCard,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  LoadingSpinner,
  ErrorMessage,
  Skeleton,
  
} from './Dashboard.styles';

const Dashboard = () => {
  const { cheapestNFT, progress, history, loading, error, refreshData } = useDashboard();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalLoading, setModalLoading] = React.useState(false);
  const [modalError, setModalError] = React.useState('');
  const [nftDetails, setNftDetails] = React.useState(null);

  const openDetails = async (tokenId) => {
    try {
      setModalOpen(true);
      setModalLoading(true);
      setModalError('');
      setNftDetails(null);
      const base = config.backendUrl;
      // Préfère les métadonnées statiques locales (sans prix) si dispo
      const url = `${base}/api/local/nft-static/${tokenId}`;
      let meta = null;
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          const data = await resp.json();
          meta = data.data;
        } else {
          // Fallback direct sur live si 404/erreur
          const liveResp = await fetch(`${base}/api/local/nft-live/${tokenId}`);
          if (!liveResp.ok) throw new Error(`HTTP ${resp.status}`);
          const liveData = await liveResp.json();
          const live = liveData.data || {};
          meta = {
            tokenId: live.tokenId || tokenId,
            name: live.name,
            description: live.description,
            image: live.image_url,
            attributes: live.traits || [],
            collection: { name: 'Hypurr', slug: 'hypurr-hyperevm' },
            externalLink: live.opensea_url,
          };
        }
      } catch (_) {
        // Si la requête statique échoue, fallback live
        const liveResp = await fetch(`${base}/api/local/nft-live/${tokenId}`);
        if (!liveResp.ok) throw new Error(`HTTP ${liveResp.status}`);
        const liveData = await liveResp.json();
        const live = liveData.data || {};
        meta = {
          tokenId: live.tokenId || tokenId,
          name: live.name,
          description: live.description,
          image: live.image_url,
          attributes: live.traits || [],
          collection: { name: 'Hypurr', slug: 'hypurr-hyperevm' },
          externalLink: live.opensea_url,
        };
      }
      // Fallback: si pas de traits/attributes, compléter avec le live
      const traitsLen = (meta?.traits || meta?.attributes || []).length;
      if (!traitsLen) {
        try {
          const liveResp = await fetch(`${base}/api/local/nft-live/${tokenId}`);
          if (liveResp.ok) {
            const liveData = await liveResp.json();
            const live = liveData.data || {};
            meta = {
              ...meta,
              traits: live.traits || meta.traits,
              attributes: live.traits || meta.attributes,
              opensea_url: live.opensea_url || meta.opensea_url,
              name: live.name || meta.name,
              description: meta.description || live.description
            };
          }
        } catch (_) {}
      }
      setNftDetails(meta);
    } catch (e) {
      setModalError(e.message || 'Failed to load');
    } finally {
      setModalLoading(false);
    }
  };
  const closeDetails = () => setModalOpen(false);

  // MOCK uniquement pour prévisualiser l'historique (aucune donnée réelle)
  const purchaseHistoryMock = [
    { id: 1, tokenId: 2389, price: '1475', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() },
  ];
  const salesHistoryMock = [
    { id: 1, tokenId: 1674, price: '1799', profit: '300', timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString() },
  ];

  const handleBuyNFT = () => {
    if (cheapestNFT) {
      window.open(cheapestNFT.openseaUrl, '_blank');
    }
  };

  const handleShareTwitter = () => {
    openTwitterShare();
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (loading) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <HypurrBackground />
        <Section variant="gradient">
          <DashboardContainer>
            {/* KPI Skeletons */}
            <StatsGrid>
              <StatCard><Skeleton h="100px" /></StatCard>
              <StatCard><Skeleton h="100px" /></StatCard>
              <StatCard><Skeleton h="100px" /></StatCard>
            </StatsGrid>

            {/* Next NFT Skeleton */}
            <NextNFTSection>
              <NFTCard>
                <NFTImage>
                  <Skeleton w="100%" h="100%" />
                </NFTImage>
                <NFTInfo>
                  <Skeleton h="28px" w="60%" />
                  <div style={{ height: 12 }} />
                  <Skeleton h="24px" w="40%" />
                  <div style={{ height: 16 }} />
                  <Skeleton h="44px" w="160px" />
                </NFTInfo>
              </NFTCard>
            </NextNFTSection>

            {/* Progress Skeleton */}
            <div style={{ maxWidth: 720, margin: '1rem auto 0', padding: '1rem' }}>
              <Skeleton h="18px" w="50%" style={{ margin: '0 auto' }} />
              <div style={{ height: 10 }} />
              <Skeleton h="14px" />
              <div style={{ height: 8 }} />
              <Skeleton h="18px" w="80px" style={{ margin: '0 auto' }} />
            </div>

            {/* History Skeletons */}
            <HistorySection>
              <HistoryGrid>
                <HistoryCard>
                  <Skeleton h="220px" />
                </HistoryCard>
                <HistoryCard>
                  <Skeleton h="220px" />
                </HistoryCard>
              </HistoryGrid>
            </HistorySection>
          </DashboardContainer>
        </Section>
      </motion.main>
    );
  }

  if (error) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HypurrBackground />
        <Section variant="gradient">
            <ErrorMessage>
              <h3>Failed to load</h3>
              <p>{error}</p>
              <Button onClick={refreshData}>Retry</Button>
            </ErrorMessage>
        </Section>
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HypurrBackground />
      <Section variant="gradient">
        <DashboardContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* KPI Cards */}
          <StatsGrid>
            <motion.div variants={itemVariants}>
              <StatCard>
                <GlowCard intensity="medium">
                  <StatTitle>HYPE Balance</StatTitle>
                  <StatValue>{progress?.walletBalance || '0'} HYPE</StatValue>
                </GlowCard>
              </StatCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatCard>
                <GlowCard intensity="medium">
                  <StatTitle>NFTs Purchased</StatTitle>
                  <StatValue>{history?.purchases?.length || 0}</StatValue>
                </GlowCard>
              </StatCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatCard>
                <GlowCard intensity="medium">
                  <StatTitle>NFTs Sold</StatTitle>
                  <StatValue>{history?.sales?.length || 0}</StatValue>
                </GlowCard>
              </StatCard>
            </motion.div>
          </StatsGrid>

          {/* Next NFT to Buy */}
          <motion.div variants={itemVariants}>
            <NextNFTSection>
              <h2 style={{ color: '#FFFFFF', marginBottom: '1.5rem', textAlign: 'center' }}>
                🎯 Next NFT to Buy
              </h2>
              {cheapestNFT ? (
                <NFTCard>
                  <NFTImage onClick={() => openDetails(cheapestNFT.tokenId)} style={{ cursor: 'pointer' }}>
                    <img 
                      src={apiService.getLocalImageUrl(cheapestNFT.tokenId)} 
                      alt={cheapestNFT.name}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x300/20A67D/FFFFFF?text=Hypurr+%23${cheapestNFT.tokenId}`;
                      }}
                    />
                  </NFTImage>
                  <NFTInfo>
                    <NFTName>{cheapestNFT.name}</NFTName>
                    <NFTPrice>{cheapestNFT.buyPriceExact || cheapestNFT.buyPrice} HYPE</NFTPrice>
                    <p style={{ color: '#8B9499', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      Last updated: {formatTimestamp(cheapestNFT.lastUpdated)}
                    </p>
                    <BuyButton onClick={handleBuyNFT}>
                      <FaExternalLinkAlt /> View on OpenSea
                    </BuyButton>
                  </NFTInfo>
                </NFTCard>
              ) : (
                <GlowCard intensity="low">
                  <div style={{ textAlign: 'center', color: '#8B9499' }}>
                    No NFTs currently available
                  </div>
                </GlowCard>
              )}
            </NextNFTSection>
          </motion.div>

          {/* Progress section removed (no wallet) */}

          {/* Progress Bar (live) */}
          <motion.div variants={itemVariants}>
            <div style={{ maxWidth: 720, margin: '1rem auto 0', padding: '1rem' }}>
              <h3 style={{ color: '#FFFFFF', marginBottom: '0.5rem', textAlign: 'center' }}>
                Progress toward next buy
              </h3>
              {progress ? (
                <div>
                  <div style={{ color: '#8B9499', textAlign: 'center', marginBottom: '0.5rem' }}>
                    Wallet: {progress.walletBalance} HYPE · Target: {progress.cheapestPrice} HYPE
                  </div>
                  <div style={{
                    height: 14,
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 999,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${Math.min(100, Math.max(0, Math.round(progress.percent)))}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #20A67D, #51D2C1)'
                    }} />
                  </div>
                  <div style={{ color: '#20A67D', textAlign: 'center', marginTop: 6, fontWeight: 'bold' }}>
                    {Math.min(100, Math.max(0, Math.round(progress.percent)))}%
                  </div>
                </div>
              ) : (
                <div style={{ color: '#8B9499', textAlign: 'center' }}>Progress unavailable</div>
              )}
            </div>
          </motion.div>

          {/* History Section (from local JSON) */}
          <motion.div variants={itemVariants}>
            <HistorySection>
              <HistoryGrid>
                {/* Purchase History */}
                <HistoryCard>
                  <GlowCard intensity="medium" glowColor="#20A67D">
                    <HistoryTitle>
                      <FaShoppingCart /> Purchase History
                    </HistoryTitle>
                    <HistoryList>
                      {history.purchases.length > 0 ? (
                        history.purchases.map((purchase) => (
                          <HistoryItem key={purchase.id} onClick={() => openDetails(purchase.tokenId)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <img
                                src={apiService.getLocalImageUrl(purchase.tokenId)}
                                alt={`Hypurr #${purchase.tokenId}`}
                                style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                                onError={(e) => {
                                  e.target.src = `https://via.placeholder.com/40x40/20A67D/FFFFFF?text=${purchase.tokenId}`;
                                }}
                              />
                              <strong>Hypurr #{purchase.tokenId}</strong>
                              <span style={{ color: '#8B9499', fontSize: '0.8rem', display: 'block' }}>
                                {formatTimestamp(purchase.timestamp)}
                              </span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: '#20A67D', fontWeight: 'bold' }}>
                                {purchase.price} HYPE
                              </div>
                            </div>
                          </HistoryItem>
                        ))
                      ) : (
                        <div style={{ color: '#8B9499', textAlign: 'center', padding: '2rem' }}>
                          No purchases
                        </div>
                      )}
                    </HistoryList>
                  </GlowCard>
                </HistoryCard>

                {/* Sales History */}
                <HistoryCard>
                  <GlowCard intensity="medium" glowColor="#F59E0B">
                    <HistoryTitle>
                      <FaHistory /> Sales History
                    </HistoryTitle>
                    <HistoryList>
                      {history.sales.length > 0 ? (
                        history.sales.map((sale) => (
                          <HistoryItem key={sale.id} onClick={() => openDetails(sale.tokenId)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <img
                                src={apiService.getLocalImageUrl(sale.tokenId)}
                                alt={`Hypurr #${sale.tokenId}`}
                                style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                                onError={(e) => {
                                  e.target.src = `https://via.placeholder.com/40x40/20A67D/FFFFFF?text=${sale.tokenId}`;
                                }}
                              />
                              <strong>Hypurr #{sale.tokenId}</strong>
                              <span style={{ color: '#8B9499', fontSize: '0.8rem', display: 'block' }}>
                                {formatTimestamp(sale.timestamp)}
                              </span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: '#F59E0B', fontWeight: 'bold' }}>
                                {sale.price} HYPE
                              </div>
                              {sale.profit !== undefined ? (
                                <div style={{ color: '#51D2C1', fontSize: '0.8rem' }}>
                                  +{sale.profit} HYPE profit
                                </div>
                              ) : null}
                            </div>
                          </HistoryItem>
                        ))
                      ) : (
                        <div style={{ color: '#8B9499', textAlign: 'center', padding: '2rem' }}>
                          No sales
                        </div>
                      )}
                    </HistoryList>
                  </GlowCard>
                </HistoryCard>
              </HistoryGrid>
            </HistorySection>
          </motion.div>

          {/* NFT Details Modal */}
          {modalOpen && (
            <div style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
            }} onClick={closeDetails}>
              <div style={{
                width: 'min(92vw, 720px)', maxHeight: '90vh', overflow: 'auto',
                background: '#0B1220', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: 20
              }} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <h3 style={{ color: '#FFFFFF', margin: 0 }}>NFT Details</h3>
                  <button onClick={closeDetails} style={{ background: 'transparent', border: 'none', color: '#8B9499', cursor: 'pointer' }}>✕</button>
                </div>
                {modalLoading ? (
                  <div style={{ color: '#8B9499' }}>Loading...</div>
                ) : modalError ? (
                  <div style={{ color: '#E46A6A' }}>{modalError}</div>
                ) : nftDetails ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16 }}>
                    <div>
                      <img
                        src={apiService.getLocalImageUrl(nftDetails.tokenId)}
                        alt={nftDetails.name}
                        style={{ width: '100%', borderRadius: 8 }}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200x200/20A67D/FFFFFF?text=Hypurr+%23${nftDetails.tokenId}`;
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>{nftDetails.name}</div>
                      <div style={{ color: '#8B9499', marginTop: 4 }}>{nftDetails.description || 'No description'}</div>
                      <div style={{ color: '#8B9499', marginTop: 8 }}>Token ID: #{nftDetails.tokenId}</div>
                      <div style={{ color: '#8B9499', marginTop: 8 }}>
                        Traits:
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                          {((nftDetails.traits || nftDetails.attributes) || []).map((t, i) => (
                            <span key={i} style={{
                              padding: '4px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: 999, color: '#D1D5DB', fontSize: 12
                            }}>
                              {(t.trait_type || t.traitType) || 'Trait'}: {t.value}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: 12 }}>
                        {(() => {
                          const contract = '0x9125e2d6827a00b0f8330d6ef7bef07730bac685';
                          const fallback = `https://opensea.io/assets/hyperevm/${contract}/${nftDetails.tokenId}`;
                          const href = nftDetails.opensea_url || nftDetails.externalLink || fallback;
                          return (
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer noopener"
                              style={{ color: '#51D2C1', textDecoration: 'underline' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              View on OpenSea ↗
                            </a>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ color: '#8B9499' }}>No data</div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <motion.div variants={itemVariants}>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}>
              <Button 
                variant="secondary"
                size="large"
                onClick={refreshData}
              >
                Refresh Data
              </Button>
            </div>
          </motion.div>
        </DashboardContainer>
      </Section>
    </motion.main>
  );
};

export default Dashboard;
