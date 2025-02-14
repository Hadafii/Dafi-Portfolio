"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const RotatingCard = ({ imageUrl }: { imageUrl: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, imageUrl);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (meshRef.current) {
      // Update rotasi objek dengan transisi smooth (lerping)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        rotation.x,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        rotation.y,
        0.1
      );
    }
  });

  const handlePointerDown = (e: any) => {
    setDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: any) => {
    if (!dragging) return;

    const deltaX = (e.clientX - start.x) * 0.02; // Sensitivitas rotasi kiri/kanan
    const deltaY = (e.clientY - start.y) * 0.005; // Sensitivitas rotasi atas/bawah

    setRotation({
      x: Math.max(Math.min(deltaY, 0.3), -0.3), // Batas miring atas/bawah
      y: deltaX, // Muter kiri/kanan full
    });
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleClick = () => {
    setRotation({ x: 0, y: 0 }); // Reset rotasi ke posisi awal
  };

  return (
    <group>
      {/* Area Drag */}
      <mesh
        position={[0, 0, -0.1]}
        scale={[2.5, 3.5, 1]}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <planeGeometry args={[2.5, 3.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Gambar / Card */}
      <mesh ref={meshRef} onClick={handleClick}>
        <planeGeometry args={[2, 3]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default function ThreeDCard() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="w-52 h-64">
      <ambientLight />
      <directionalLight position={[1, 1, 5]} intensity={1} />
      <RotatingCard imageUrl="/DAFIUTOMO.jpg" />
    </Canvas>
  );
}
