import React, { useState, useEffect } from 'react';
import {
  BackgroundContainer,
} from './HypurrBackground.styles';

const HypurrBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  // Effet parallaxe sur scroll optimisé
  useEffect(() => {
    const handleScroll = () => {
      // Throttle pour des performances optimales
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === SYSTÈME DE COUCHES DE PROFONDEUR AVEC PARALLAXE VISIBLE ===
  // Layer 1: Arrière-plan (le plus loin, mouvement lent mais visible)
  const backgroundLayer = [
    {
      id: 1,
      name: 'background-01.jpg',
      size: 150,
      position: { top: '5%', left: '8%' },
      layer: 'back',
      parallaxSpeed: 8,
      opacity: 0.15,
      blur: 1.5,
    },
    {
      id: 2, 
      name: 'background-02.jpg', 
      size: 140,
      position: { top: '60%', right: '12%' },
      layer: 'back',
      parallaxSpeed: 5,
      opacity: 0.18,
      blur: 1.2,
    },
    {
      id: 3,
      name: 'background-03.jpg',
      size: 135,
      position: { bottom: '25%', left: '15%' },
      layer: 'back',
      parallaxSpeed: 6,
      opacity: 0.16,
      blur: 1.4,
    },
    {
      id: 4,
      name: 'background-04.jpg',
      size: 145,
      position: { top: '35%', right: '8%' },
      layer: 'back',
      parallaxSpeed: 4,
      opacity: 0.17,
      blur: 1.3,
    },
  ];

  // Layer 2: Plan moyen (vitesse moyenne bien visible)
  const middleLayer = [
    {
      id: 5,
      name: 'background-05.jpg',
      size: 120,
      position: { top: '15%', left: '45%' },
      layer: 'middle',
      parallaxSpeed: 15,
      opacity: 0.3,
      blur: 0.8,
    },
    {
      id: 6,
      name: 'background-06.jpg',
      size: 115,
      position: { top: '50%', right: '25%' },
      layer: 'middle', 
      parallaxSpeed: 18,
      opacity: 0.32,
      blur: 0.6,
    },
    {
      id: 7,
      name: 'background-07.jpg',
      size: 110,
      position: { bottom: '40%', left: '35%' },
      layer: 'middle',
      parallaxSpeed: 16,
      opacity: 0.28,
      blur: 0.7,
    },
    {
      id: 8,
      name: 'background-08.jpg',
      size: 125,
      position: { top: '75%', right: '45%' },
      layer: 'middle',
      parallaxSpeed: 14,
      opacity: 0.31,
      blur: 0.65,
    },
  ];

  // Layer 3: Premier plan (mouvement rapide et très visible) 
  const foregroundLayer = [
    {
      id: 9,
      name: 'background-09.jpg',
      size: 100,
      position: { top: '25%', right: '5%' },
      layer: 'front',
      parallaxSpeed: 30,
      opacity: 0.45,
      blur: 0.2,
    },
    {
      id: 10,
      name: 'background-10.jpg',
      size: 95,
      position: { bottom: '15%', right: '15%' },
      layer: 'front',
      parallaxSpeed: 35,
      opacity: 0.48,
      blur: 0.1,
    },
    {
      id: 11,
      name: 'background-11.jpg',
      size: 90,
      position: { top: '45%', left: '5%' },
      layer: 'front',
      parallaxSpeed: 32,
      opacity: 0.46,
      blur: 0.15,
    },
    {
      id: 12,
      name: 'background-12.jpg',
      size: 85,
      position: { bottom: '50%', left: '25%' },
      layer: 'front',
      parallaxSpeed: 28,
      opacity: 0.5,
      blur: 0.05,
    },
  ];

  // Fonction pour rendre une couche avec parallaxe FONCTIONNEL
  const renderLayer = (layerImages, zIndex) => {
    return layerImages.map((hypurr) => {
      // Calcul adaptatif de l'effet parallaxe selon l'écran
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
      
      // Réduire l'effet parallaxe sur mobile et tablet
      const speedMultiplier = isMobile ? 0.3 : isTablet ? 0.6 : 1;
      
      // Mouvement UNIQUEMENT vertical (pas de diagonale)
      const moveY = scrollY * (hypurr.parallaxSpeed / 100) * speedMultiplier;
      const moveX = 0; // Pas de mouvement horizontal
      
      
      return (
        <div
          key={hypurr.id}
          style={{
            position: 'absolute',
            ...hypurr.position,
            width: `${hypurr.size}px`,
            height: `${hypurr.size}px`,
            opacity: hypurr.opacity,
            transform: `translate(${moveX}px, ${moveY}px)`,
            zIndex: zIndex,
            pointerEvents: 'none',
            transition: 'none',
            filter: `blur(${hypurr.blur}px) drop-shadow(0 4px 12px rgba(32, 166, 125, 0.2))`,
          }}
        >
          <img 
            src={`/images/background/${hypurr.name}`}
            alt={`Hypurr ${hypurr.layer} layer ${hypurr.name.split('-')[1].split('.')[0]}`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '12px',
              display: 'block',
            }}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            onLoad={() => {
              console.log(`✅ ${hypurr.layer} layer loaded: ${hypurr.name}`);
            }}
            onError={(e) => {
              console.log(`❌ ${hypurr.layer} layer failed: ${hypurr.name}`);
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #20A67D, #51D2C1)';
              e.target.parentElement.innerHTML = `<div style="
                color: white; 
                font-size: 10px; 
                text-align: center; 
                padding: 8px;
                font-family: monospace;
                line-height: 1.2;
              ">${hypurr.layer}<br/>${hypurr.name.split('-')[1]}</div>`;
            }}
          />
        </div>
      );
    });
  };

  return (
    <BackgroundContainer>
      
      {/* === COUCHE 1: ARRIÈRE-PLAN === */}
      {/* Images lointaines, mouvement lent, très floues */}
      {renderLayer(backgroundLayer, 1)}
      
      {/* === COUCHE 2: PLAN MOYEN === */}
      {/* Images à distance moyenne, vitesse moyenne */}
      {renderLayer(middleLayer, 2)}
      
      {/* === COUCHE 3: PREMIER PLAN === */}
      {/* Images proches, mouvement rapide, nettes */}
      {renderLayer(foregroundLayer, 3)}
    </BackgroundContainer>
  );
};

export default HypurrBackground;