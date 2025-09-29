import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function DogPaw() {
  const pawRef = useRef();
  const toe1Ref = useRef();
  const toe2Ref = useRef();
  const toe3Ref = useRef();
  const toe4Ref = useRef();
  const padRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (toe1Ref.current) toe1Ref.current.rotation.z = Math.sin(time * 2 + 0) * 0.1;
    if (toe2Ref.current) toe2Ref.current.rotation.z = Math.sin(time * 2 + 0.5) * 0.1;
    if (toe3Ref.current) toe3Ref.current.rotation.z = Math.sin(time * 2 + 1.0) * 0.1;
    if (toe4Ref.current) toe4Ref.current.rotation.z = Math.sin(time * 2 + 1.5) * 0.1;
    if (padRef.current) {
      const s = 1 + Math.sin(time * 3) * 0.05;
      padRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[0, 0, 0]} scale={1.5}>
      <group position={[0, -0.9, 0]}>
        {/* Main pad */}
        <mesh ref={padRef} position={[0, -0.2, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.4, 16, 12]} />
          <meshStandardMaterial color="#2F1B14" roughness={0.9} />
        </mesh>

        {/* Toe 1 */}
        <group ref={toe1Ref} position={[-0.8, 0.3, 0.2]}>
          <mesh>
            <sphereGeometry args={[0.35, 16, 12]} />
            <meshStandardMaterial color="#2d1810" roughness={0.8} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.4, 0.2]} rotation={[0.3, 0, 0]}>
            <coneGeometry args={[0.08, 0.3, 8]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>

        {/* Toe 2 */}
        <group ref={toe2Ref} position={[-0.3, 0.6, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.4, 16, 12]} />
            <meshStandardMaterial color="#2d1810" roughness={0.8} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.5, 0.2]} rotation={[0.3, 0, 0]}>
            <coneGeometry args={[0.08, 0.35, 8]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>

        {/* Toe 3 */}
        <group ref={toe3Ref} position={[0.3, 0.6, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.4, 16, 12]} />
            <meshStandardMaterial color="#2d1810" roughness={0.8} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.5, 0.2]} rotation={[0.3, 0, 0]}>
            <coneGeometry args={[0.08, 0.35, 8]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>

        {/* Toe 4 */}
        <group ref={toe4Ref} position={[0.8, 0.3, 0.2]}>
          <mesh>
            <sphereGeometry args={[0.35, 16, 12]} />
            <meshStandardMaterial color="#2d1810" roughness={0.8} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.4, 0.2]} rotation={[0.3, 0, 0]}>
            <coneGeometry args={[0.08, 0.3, 8]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>

        {/* Wrist */}
        <mesh ref={pawRef} position={[0, -1.8, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 1.2, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.9} metalness={0.05} />
        </mesh>
      </group>
    </group>
  );
}

export default DogPaw;

