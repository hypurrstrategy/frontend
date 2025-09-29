import { useState, useEffect, useCallback } from 'react';
import config from '../config/environment';

// Debounce server-side price refresh (max ~every 5 minutes)
let lastServerRefreshAt = 0;

export const useDashboard = () => {
  const [cheapestNFT, setCheapestNFT] = useState(null);
  const [stats, setStats] = useState(null);
  const [progress, setProgress] = useState(null);
  const [history, setHistory] = useState({ purchases: [], sales: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const base = config.backendUrl;

      // Skip local stats (can be stale/wrong with live pricing)
      setStats(null);

      // Read the current cheapest NFT live from backend
      try {
        // Try dedicated cheapest endpoint if backend exposes it
        const cheapestEndpoint = `${base}/api/local/cheapest`;
        let resp = await fetch(cheapestEndpoint);
        if (!resp.ok) {
          throw new Error('cheapest endpoint not available');
        }
        if (resp.ok) {
          const cheapestData = await resp.json();
          const nft = cheapestData.data || cheapestData; // accept both shapes
          if (nft && nft.tokenId) {
            setCheapestNFT({
              ...nft,
              // Prefer server-provided URL; fallback to canonical format
              openseaUrl: nft.openseaUrl || `https://opensea.io/assets/hyperevm/0x9125e2d6827a00b0f8330d6ef7bef07730bac685/${nft.tokenId}`,
              // Normalize price fields: prefer exact live price
              buyPriceExact: nft.buyPriceExact || nft.buyPrice,
              lastUpdated: nft.lastUpdated || new Date().toISOString()
            });
          }
        }
      } catch (_) {}

      // Read progress (based on env WALLET_HYPE_BALANCE)
      try {
        const resp = await fetch(`${base}/api/local/progress`);
        if (resp.ok) {
          const data = await resp.json();
          setProgress(data.data);
        } else {
          setProgress(null);
        }
      } catch (_) {
        setProgress(null);
      }

      // Read history (from read-only wallet via backend)
      try {
        const resp = await fetch(`${base}/api/local/history-wallet`);
        if (resp.ok) {
          const data = await resp.json();
          setHistory(data.data || { purchases: [], sales: [] });
        } else {
          setHistory({ purchases: [], sales: [] });
        }
      } catch (_) {
        setHistory({ purchases: [], sales: [] });
      }

    } catch (err) {
      setError(err.message);
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Charger une fois au montage uniquement
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    cheapestNFT,
    stats,
    progress,
    history,
    loading,
    error,
    refreshData: fetchDashboardData
  };
};

export const useWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState('0.0');
  const [address, setAddress] = useState('');

  const connectWallet = useCallback(() => {
    // Simulation de connexion wallet
    setIsConnected(true);
    setBalance('2847.5234567890123456'); // Simulation avec décimaux complets
    setAddress('0x1234...5678');
  }, []);

  const disconnectWallet = useCallback(() => {
    setIsConnected(false);
    setBalance('0.0');
    setAddress('');
  }, []);

  return {
    isConnected,
    balance,
    address,
    connectWallet,
    disconnectWallet
  };
};

export const useTransactionHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [salesHistory, setSalesHistory] = useState([]);

  useEffect(() => {
    // Simuler l'historique des transactions basé sur les données réelles
    setPurchaseHistory([
      {
        id: 1,
        tokenId: 2389,
        price: '1475',
        timestamp: '2025-09-29T05:30:00.000Z',
        txHash: '0xabc123...def456',
        status: 'confirmed'
      },
      {
        id: 2,
        tokenId: 991,
        price: '1479',
        timestamp: '2025-09-29T04:15:00.000Z',
        txHash: '0xdef456...abc123',
        status: 'confirmed'
      },
      {
        id: 3,
        tokenId: 3309,
        price: '1498.899990000000116197',
        timestamp: '2025-09-29T03:45:00.000Z',
        txHash: '0x111222...333444',
        status: 'confirmed'
      }
    ]);

    setSalesHistory([
      {
        id: 1,
        tokenId: 1674,
        purchasePrice: '1499',
        salePrice: '1799',
        profit: '300',
        timestamp: '2025-09-29T02:15:00.000Z',
        txHash: '0x555666...777888',
        status: 'confirmed'
      },
      {
        id: 2,
        tokenId: 4240,
        purchasePrice: '1545',
        salePrice: '1854',
        profit: '309',
        timestamp: '2025-09-29T01:30:00.000Z',
        txHash: '0x999aaa...bbbccc',
        status: 'confirmed'
      }
    ]);
  }, []);

  return {
    purchaseHistory,
    salesHistory
  };
};
