import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

export const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(32, 166, 125, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(32, 166, 125, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;

  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

export const FloatingOrb = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(81, 210, 193, 0.4),
    rgba(32, 166, 125, 0.2),
    transparent
  );
  filter: blur(1px);
  pointer-events: none;
`;
