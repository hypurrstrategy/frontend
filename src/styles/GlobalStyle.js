import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.mono};
    background: 
      radial-gradient(circle at 10% 20%, rgba(32, 166, 125, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(81, 210, 193, 0.015) 0%, transparent 50%),
      ${({ theme }) => theme.colors.deepBlack};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  /* Main App Container */
  .App {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
  }
  
  /* Responsive container */
  main {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Better responsive text */
  h1, h2, h3, h4, h5, h6 {
    word-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
  }
  
  p {
    word-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
  }
  
  /* Prevent horizontal scroll */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    .App {
      padding: 0;
    }
    
    section {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  /* Selection styles */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Focus styles */
  button:focus,
  a:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes pulse {
    0%, 100% { 
      transform: scale(1);
      opacity: 1;
    }
    50% { 
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px);
    }
    50% { 
      transform: translateY(-20px);
    }
  }

  @keyframes rotate {
    from { 
      transform: rotate(0deg);
    }
    to { 
      transform: rotate(360deg);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    position: relative;
    z-index: 10;
  }
  
  /* Smooth animations for all elements */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Enhanced focus states */
  *:focus {
    outline: none;
  }
  
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Ensure content is above background */
  section {
    position: relative;
    z-index: 10;
  }

  .text-center {
    text-align: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
