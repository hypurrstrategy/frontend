import config from '../config/environment';

class ApiService {
  constructor() {
    // Normaliser l'URL backend pour éviter les double-slash (utilisée côté proxy uniquement)
    const raw = config.backendUrl || '';
    this.baseURL = raw.endsWith('/') ? raw.slice(0, -1) : raw;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, requestConfig);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  }

  // Health check
  async getHealth() {
    return this.request('/api/health');
  }

  // NFT endpoints
  async getListedNFTs() {
    return this.request('/api/nft/listed');
  }

  async getNextNFTToBuy() {
    return this.request('/api/nft/next-to-buy');
  }

  async getNFT(tokenId) {
    return this.request(`/api/nft/${tokenId}`);
  }

  // Collection endpoints
  async getCollectionInfo() {
    return this.request('/api/collection/info');
  }

  async getCollectionStats() {
    return this.request('/api/collection/stats');
  }

  async getCollectionSummary() {
    return this.request('/api/collection/summary');
  }

  async getCollectionSpecs() {
    return this.request('/api/collection/specs');
  }

  async getNFTSpec(tokenId) {
    return this.request(`/api/collection/spec/${tokenId}`);
  }

  async fetchAllCollection() {
    return this.request('/api/collection/fetch-all');
  }

  async refreshCollection() {
    return this.request('/api/collection/refresh', { method: 'POST' });
  }

  // Image endpoints
  async getImageUrl(tokenId) {
    return this.request(`/api/image/url/${tokenId}`);
  }

  async downloadImage(tokenId, options = {}) {
    return this.request(`/api/image/download/${tokenId}`, {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }

  async getImageCacheStats() {
    return this.request('/api/image/cache/stats');
  }

  async clearImageCache() {
    return this.request('/api/image/cache', { method: 'DELETE' });
  }

  // Protocol endpoints
  async getProtocolStats() {
    return this.request('/api/collection/protocol');
  }

  // Local NFT endpoints (optimized with local storage)
  async getNFTDetails(tokenId) {
    return this.request(`/api/local/nft/${tokenId}`);
  }

  async getListedNFTs(limit = 50) {
    return this.request(`/api/local/listed?limit=${limit}`);
  }

  async getCheapestNFT() {
    return this.request('/api/local/cheapest');
  }

  async getCollectionStats() {
    return this.request('/api/local/stats');
  }

  async getFullCollection() {
    return this.request('/api/local/collection');
  }

  async searchNFTs(filters = {}) {
    const params = new URLSearchParams();
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.search) params.append('search', filters.search);
    if (filters.limit) params.append('limit', filters.limit);
    
    return this.request(`/api/local/search?${params.toString()}`);
  }

  // Admin endpoints
  async downloadFullCollection() {
    return this.request('/api/local/download-full', { method: 'POST' });
  }

  async updatePrices() {
    return this.request('/api/local/update-prices', { method: 'POST' });
  }

  // Legacy endpoints for compatibility
  async getTransactionHistory(limit = 20) {
    // Simuler l'historique pour l'instant
    return Promise.resolve({
      success: true,
      data: [
        {
          id: 1,
          tokenId: 4552,
          type: 'purchase',
          price: '0.05',
          buyer: '0x1234...5678',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          txHash: '0xabc123...def456'
        }
      ],
      count: 1
    });
  }

  // Utility methods
  getLocalImageUrl(tokenId) {
    // Utilise directement le backend
    return `${this.baseURL}/api/image/proxy/${tokenId}`;
  }

  getPlaceholderUrl(tokenId) {
    return `https://via.placeholder.com/400x400/20A67D/FFFFFF?text=Hypurr+%23${tokenId}`;
  }
}

const apiServiceInstance = new ApiService();
export default apiServiceInstance;
