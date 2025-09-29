import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/apiService';

export const useCollection = () => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCollection = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.fetchAllCollection();
      if (response.success) {
        setCollection(response.data);
      } else {
        throw new Error(response.message || 'Failed to fetch collection');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching collection:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshCollection = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.refreshCollection();
      if (response.success) {
        setCollection(response.data);
      } else {
        throw new Error(response.message || 'Failed to refresh collection');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error refreshing collection:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  return {
    collection,
    loading,
    error,
    fetchCollection,
    refreshCollection
  };
};

export const useCollectionSummary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.getCollectionSummary();
      if (response.success) {
        setSummary(response.data);
      } else {
        throw new Error(response.message || 'Failed to fetch collection summary');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching collection summary:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  return {
    summary,
    loading,
    error,
    fetchSummary
  };
};

export const useNFT = (tokenId) => {
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNFT = useCallback(async () => {
    if (!tokenId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.getNFT(tokenId);
      if (response.success) {
        setNft(response.data);
      } else {
        throw new Error(response.message || 'Failed to fetch NFT');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching NFT:', err);
    } finally {
      setLoading(false);
    }
  }, [tokenId]);

  useEffect(() => {
    fetchNFT();
  }, [fetchNFT]);

  return {
    nft,
    loading,
    error,
    fetchNFT
  };
};

export const useProtocolStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.getProtocolStats();
      if (response.success) {
        setStats(response.data);
      } else {
        throw new Error(response.message || 'Failed to fetch protocol stats');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching protocol stats:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    fetchStats
  };
};
