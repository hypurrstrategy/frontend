import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export function MouseTracker({ children }) {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0, z: 0 });
  const current = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      target.current.x = mouse.current.y * 0.3;
      target.current.y = mouse.current.x * 0.5;
      target.current.z = mouse.current.x * 0.2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const lerp = (a, b, t) => a + (b - a) * t;
    current.current.x = lerp(current.current.x, target.current.x, 0.05);
    current.current.y = lerp(current.current.y, target.current.y, 0.05);
    current.current.z = lerp(current.current.z, target.current.z, 0.05);
    groupRef.current.rotation.set(current.current.x, current.current.y, current.current.z);
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 2) * 0.1;
    groupRef.current.rotation.z += Math.sin(t * 3) * 0.02;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default MouseTracker;

