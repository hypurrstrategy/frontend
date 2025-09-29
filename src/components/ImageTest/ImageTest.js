import React from 'react';

const ImageTest = () => {
  const images = Array.from({ length: 12 }, (_, i) => 
    `background-${String(i + 1).padStart(2, '0')}.jpg`
  );

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '10px', 
      padding: '20px',
      background: '#0a0a0a'
    }}>
      <h2 style={{ 
        gridColumn: '1 / -1', 
        color: '#20A67D', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        ✅ Collection Complète - 12 NFT Hypurr Background
      </h2>
      {images.map((imageName, index) => (
        <div key={index} style={{
          border: '2px solid #20A67D',
          borderRadius: '10px',
          overflow: 'hidden',
          aspectRatio: '1',
          background: '#1a1a1a'
        }}>
          <img 
            src={`/images/background/${imageName}`}
            alt={`Collection ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onLoad={() => console.log(`✅ Loaded: ${imageName}`)}
            onError={(e) => {
              console.log(`❌ Failed to load: ${imageName}`);
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                  color: #ff4444;
                  font-size: 12px;
                  text-align: center;
                ">
                  ❌<br/>${imageName}
                </div>
              `;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTest;