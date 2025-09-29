import styled from 'styled-components';

export const CharacterContainer = styled.div`
  position: absolute;
  ${({ position }) => position && Object.entries(position).map(([key, value]) => `${key}: ${value}`).join('; ')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  user-select: none;
  filter: drop-shadow(0 4px 12px rgba(32, 166, 125, 0.3));
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CatBody = styled.div`
  position: relative;
  width: ${({ size }) => size * 0.6}px;
  height: ${({ size }) => size * 0.8}px;
  background: #51D2C1;
  border-radius: 50% 50% 60% 60%;
  border: 2px solid #20A67D;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Hoodie = styled.div`
  position: absolute;
  top: 10%;
  width: 90%;
  height: 70%;
  background: #273036;
  border-radius: 20px 20px 30% 30%;
  border: 2px solid #20A67D;
  
  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #20A67D;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 15px;
    background: #51D2C1;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const CatHead = styled.div`
  position: absolute;
  top: -30%;
  width: ${({ size }) => size * 0.7}px;
  height: ${({ size }) => size * 0.6}px;
  background: #FFFFFF;
  border-radius: 50%;
  border: 2px solid #20A67D;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CatEar = styled.div`
  position: absolute;
  top: -10px;
  ${({ left }) => left ? 'left: 15%' : 'right: 15%'};
  width: 25px;
  height: 30px;
  background: #51D2C1;
  border-radius: 80% 20% 20% 20%;
  border: 2px solid #20A67D;
  transform: ${({ left }) => left ? 'rotate(-20deg)' : 'rotate(20deg)'};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 15px;
    background: #FFB6C1;
    border-radius: 50%;
  }
`;

export const CatStripe = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 20px;
  background: #273036;
  border-radius: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 15px;
    background: #273036;
    border-radius: 1px;
  }

  &::before {
    left: -8px;
    top: 2px;
  }

  &::after {
    right: -8px;
    top: 2px;
  }
`;

export const CatEye = styled.div`
  position: absolute;
  top: 35%;
  ${({ left }) => left ? 'left: 25%' : 'right: 25%'};
  width: 12px;
  height: ${({ sleepy }) => sleepy ? '4px' : '15px'};
  background: ${({ sleepy }) => sleepy ? '#273036' : '#0E1A1E'};
  border-radius: ${({ sleepy, happy, surprised }) => 
    sleepy ? '50px' : 
    happy ? '50% 50% 0 0' :
    surprised ? '50%' : '60% 60% 50% 50%'
  };
  
  ${({ surprised }) => surprised && `
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 11px;
      background: #FFFFFF;
      border-radius: 50%;
    }
  `}

  ${({ happy }) => happy && `
    border-bottom: 2px solid #20A67D;
  `}
`;

export const CatNose = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 5px;
  background: #FFB6C1;
  border-radius: 50% 50% 50% 50%;
  border: 1px solid #273036;
`;

export const CatMouth = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ surprised }) => surprised ? '8px' : '4px'};
  height: ${({ surprised }) => surprised ? '12px' : '6px'};
  background: ${({ surprised }) => surprised ? '#FFB6C1' : 'transparent'};
  border-radius: 50%;
  
  ${({ surprised }) => !surprised && `
    border-bottom: 2px solid #FFB6C1;
    border-left: 1px solid #FFB6C1;
    border-right: 1px solid #FFB6C1;
    border-radius: 0 0 50px 50px;
  `}

  ${({ happy }) => happy && `
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 4px;
      background: #FFB6C1;
      border-radius: 50%;
    }
  `}

  ${({ sleepy }) => sleepy && `
    width: 8px;
    height: 3px;
    background: #273036;
    border-radius: 50px;
    border: none;
  `}
`;

export const CatTail = styled.div`
  position: absolute;
  bottom: 20%;
  right: -15px;
  width: 30px;
  height: 60px;
  background: #51D2C1;
  border-radius: 50% 20% 50% 80%;
  border: 2px solid #20A67D;
  transform: rotate(20deg);
  animation: tail-sway 3s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 15px;
    background: #273036;
    border-radius: 2px;
  }

  &::before {
    top: 20%;
    left: 30%;
  }

  &::after {
    top: 50%;
    left: 40%;
  }

  @keyframes tail-sway {
    0%, 100% { transform: rotate(20deg); }
    50% { transform: rotate(35deg); }
  }
`;

export const CatPaw = styled.div`
  position: absolute;
  bottom: -5px;
  ${({ left }) => left ? 'left: 20%' : 'right: 20%'};
  width: 20px;
  height: 25px;
  background: #FFFFFF;
  border-radius: 50% 50% 60% 60%;
  border: 2px solid #20A67D;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 8px;
    background: #FFB6C1;
    border-radius: 50%;
  }
`;

export const MoneyStack = styled.div`
  position: absolute;
  ${({ left }) => left ? 'left: -40px' : 'right: -40px'};
  ${({ left }) => left ? 'top: 20%' : 'top: 10%'};
  width: 30px;
  height: 40px;
  background: #20A67D;
  border-radius: 8px;
  border: 2px solid #273036;
  animation: money-float 4s ease-in-out infinite;

  &::before {
    content: '$';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 2px;
    width: 26px;
    height: 8px;
    background: #51D2C1;
    border-radius: 8px 8px 0 0;
    border: 2px solid #273036;
    border-bottom: none;
  }

  @keyframes money-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
`;

export const FlameEffect = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 40px;
  background: 
    radial-gradient(ellipse at center bottom, 
      #F59E0B 0%, 
      #EF4444 30%, 
      transparent 70%
    );
  border-radius: 50% 50% 0 0;
  animation: flame-dance 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 20px;
    height: 30px;
    background: linear-gradient(to top, #F59E0B, #EF4444);
    border-radius: 50% 50% 20% 20%;
    animation: flame-flicker 1.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 20%;
    width: 15px;
    height: 25px;
    background: linear-gradient(to top, #F59E0B, #EF4444);
    border-radius: 50% 50% 30% 30%;
    animation: flame-flicker 1.8s ease-in-out infinite reverse;
  }

  @keyframes flame-dance {
    0%, 100% { transform: translateX(-50%) scaleY(1); }
    50% { transform: translateX(-50%) scaleY(1.2); }
  }

  @keyframes flame-flicker {
    0%, 100% { transform: scaleY(1) scaleX(1); }
    25% { transform: scaleY(0.8) scaleX(1.2); }
    75% { transform: scaleY(1.2) scaleX(0.9); }
  }
`;
