const config = {
  development: {
    backendUrl: process.env.REACT_APP_BACKEND_URL || 'https://backend-liart-one.vercel.app',
    apiTimeout: 30000,
  },
  production: {
    backendUrl: process.env.REACT_APP_BACKEND_URL || 'https://backend-liart-one.vercel.app',
    apiTimeout: 30000,
  },
  test: {
    backendUrl: 'http://localhost:3001',
    apiTimeout: 5000,
  }
};

const environment = process.env.NODE_ENV || 'development';

export default config[environment];
