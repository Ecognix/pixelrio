"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitingPixel {
  radius: number;
  speed: number;
  inclination: number;
  phase: number;
  size: number;
  isBlue: boolean;
}

function KineticCore({ isDragging, dragDelta }: { isDragging: boolean; dragDelta: { x: number; y: number } }) {
  const outerCageRef = useRef<THREE.Mesh>(null);
  const innerPolyRef = useRef<THREE.Mesh>(null);
  const centralPixelRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);
  const rootGroupRef = useRef<THREE.Group>(null);

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const momentumRef = useRef({ x: 0, y: 0 });

  // Orbiting satellite mini-pixels
  const satellites: OrbitingPixel[] = useMemo(() => [
    { radius: 2.1, speed: 0.9, inclination: 0.35, phase: 0, size: 0.18, isBlue: true },
    { radius: 2.4, speed: -0.7, inclination: -0.45, phase: Math.PI * 0.6, size: 0.14, isBlue: false },
    { radius: 2.2, speed: 1.1, inclination: 0.8, phase: Math.PI * 1.3, size: 0.16, isBlue: true },
    { radius: 2.6, speed: -0.85, inclination: -0.2, phase: Math.PI * 1.8, size: 0.12, isBlue: false },
  ], []);

  // Track cursor position inside canvas
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Lerp smooth mouse tracking
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

    // Handle drag inertia
    if (isDragging) {
      momentumRef.current.x = dragDelta.x * 0.01;
      momentumRef.current.y = dragDelta.y * 0.01;
    } else {
      momentumRef.current.x *= 0.92;
      momentumRef.current.y *= 0.92;
    }

    if (rootGroupRef.current) {
      rootGroupRef.current.rotation.y += momentumRef.current.x;
      rootGroupRef.current.rotation.x += momentumRef.current.y;

      // Subtle tilt based on cursor
      rootGroupRef.current.rotation.y += (mouseRef.current.x * 0.35 - rootGroupRef.current.rotation.y * 0.05) * 0.03;
      rootGroupRef.current.rotation.x += (-mouseRef.current.y * 0.35 - rootGroupRef.current.rotation.x * 0.05) * 0.03;
    }

    // Outer geometric wireframe cage: smooth continuous rotation
    if (outerCageRef.current) {
      outerCageRef.current.rotation.y = time * 0.25;
      outerCageRef.current.rotation.x = Math.sin(time * 0.2) * 0.3;
    }

    // Inner faceted dodecahedron: counter-rotation
    if (innerPolyRef.current) {
      innerPolyRef.current.rotation.y = -time * 0.35;
      innerPolyRef.current.rotation.z = Math.cos(time * 0.25) * 0.25;
      // Gentle breathing scale
      const s = 1 + Math.sin(time * 1.5) * 0.04;
      innerPolyRef.current.scale.set(s, s, s);
    }

    // Center signature electric blue pixel cube: breathing and hover
    if (centralPixelRef.current) {
      centralPixelRef.current.rotation.x = time * 0.6;
      centralPixelRef.current.rotation.y = time * 0.8;
      const hoverY = Math.sin(time * 2.5) * 0.08;
      centralPixelRef.current.position.y = hoverY;
    }

    // Update orbiting satellite pixels
    if (orbitGroupRef.current) {
      orbitGroupRef.current.children.forEach((child, idx) => {
        const sat = satellites[idx];
        if (!sat) return;
        const currentAngle = sat.phase + time * sat.speed;
        const x = Math.cos(currentAngle) * sat.radius;
        const z = Math.sin(currentAngle) * sat.radius;
        const y = Math.sin(currentAngle) * Math.sin(sat.inclination) * sat.radius;

        child.position.set(x, y, z);
        child.rotation.x = time * 2;
        child.rotation.y = time * 2;
      });
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, 0, 0]}>
      {/* 1. Outer Minimalist Icosahedron Wireframe */}
      <mesh ref={outerCageRef}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshStandardMaterial
          wireframe
          color="#1E1E1E"
          wireframeLinewidth={1.5}
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 2. Inner Translucent Faceted Polyhedron (Dodecahedron) */}
      <mesh ref={innerPolyRef}>
        <dodecahedronGeometry args={[1.15, 0]} />
        <meshPhysicalMaterial
          color="#F0F0F6"
          roughness={0.15}
          metalness={0.1}
          transmission={0.7}
          thickness={0.8}
          transparent
          opacity={0.55}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 3. The Iconic Electric Blue Central Pixel Cube */}
      <mesh ref={centralPixelRef}>
        <boxGeometry args={[0.55, 0.55, 0.55]} />
        <meshStandardMaterial
          color="#0600FC"
          emissive="#0600FC"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.3}
        />
      </mesh>

      {/* 4. Orbiting Satellite Micro-Pixel Cubes */}
      <group ref={orbitGroupRef}>
        {satellites.map((sat, idx) => (
          <mesh key={idx}>
            <boxGeometry args={[sat.size, sat.size, sat.size]} />
            <meshStandardMaterial
              color={sat.isBlue ? "#0600FC" : "#D6D6F0"}
              emissive={sat.isBlue ? "#0600FC" : "#000000"}
              emissiveIntensity={sat.isBlue ? 0.35 : 0}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* 5. Minimalist Ambient Floor Shadow Disc */}
      <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.6, 32]} />
        <meshBasicMaterial
          color="#0600FC"
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

export default function MinimalCoreScene() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    prevMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouseRef.current.x;
    const dy = e.clientY - prevMouseRef.current.y;
    setDragDelta({ x: dx, y: dy });
    prevMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDragDelta({ x: 0, y: 0 });
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Balanced studio lighting for light lavender theme */}
        <ambientLight intensity={1.4} />
        
        {/* Soft Key Light from top-front */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={1.6}
          color="#FFFFFF"
        />

        {/* Electric Blue Accent Rim Light from behind */}
        <pointLight
          position={[-3, -2, -3]}
          intensity={3.5}
          color="#0600FC"
          distance={10}
        />

        {/* Secondary Blue Highlight */}
        <pointLight
          position={[3, 2, -2]}
          intensity={2.2}
          color="#2b2bff"
          distance={8}
        />

        {/* The Animated Kinetic 3D Core */}
        <KineticCore isDragging={isDragging} dragDelta={dragDelta} />
      </Canvas>
    </div>
  );
}
