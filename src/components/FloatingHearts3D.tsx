import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Heart({ position, scale, color, speed }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.25, y + 0.25);
    shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
    shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.2,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={[Math.PI, 0, 0]}>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Sparkle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(0.02 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.01);
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial 
        color="#fff5e6" 
        emissive="#ffd700"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function FloatingHearts3D() {
  const hearts = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], scale: 0.8, color: '#e8a4a8', speed: 1.2 },
    { position: [3, 0.5, -1] as [number, number, number], scale: 0.6, color: '#f5c6cb', speed: 1.5 },
    { position: [-1.5, -1, 0] as [number, number, number], scale: 0.5, color: '#e8b4b8', speed: 1.8 },
    { position: [2, 1.5, -3] as [number, number, number], scale: 0.9, color: '#d4a4a8', speed: 1 },
    { position: [0, 2, -2] as [number, number, number], scale: 0.7, color: '#f8d4d8', speed: 1.3 },
    { position: [-2.5, -0.5, -1] as [number, number, number], scale: 0.4, color: '#e8c4c8', speed: 2 },
    { position: [1.5, -1.5, -2] as [number, number, number], scale: 0.55, color: '#f0b8bc', speed: 1.6 },
  ], []);

  const sparkles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8 - 2
      ] as [number, number, number]
    })), []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff5f5" />
        <pointLight position={[-5, 3, 2]} intensity={0.5} color="#ffb6c1" />
        
        {hearts.map((heart, i) => (
          <Heart key={i} {...heart} />
        ))}
        
        {sparkles.map((sparkle, i) => (
          <Sparkle key={`sparkle-${i}`} position={sparkle.position} />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
