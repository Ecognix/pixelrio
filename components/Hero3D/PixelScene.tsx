"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Grid definition for letter "P"
// 5 columns (0 to 4), 7 rows (0 to 6)
const P_GRID_COORDS: [number, number, boolean][] = [
  // Stem of P (x = -1.5)
  [-1.5, 2.4, false],
  [-1.5, 1.6, false],
  [-1.5, 0.8, false],
  [-1.5, 0.0, false],
  [-1.5, -0.8, false],
  [-1.5, -1.6, false],
  [-1.5, -2.4, false],

  // Top bar of P (y = 2.4)
  [-0.7, 2.4, false],
  [0.1, 2.4, false],
  [0.9, 2.4, false],
  [1.7, 2.4, false],

  // Upper right side of P loop (x = 1.7)
  [1.7, 1.6, false],
  [1.7, 0.8, false],

  // Middle bar of P (y = 0.0)
  [0.9, 0.0, false],
  [0.1, 0.0, false],
  [-0.7, 0.0, false],

  // The Iconic Electric Blue Pixel (nested prominently in the loop!)
  [0.1, 1.2, true],

  // Surrounding ambient floating satellite pixel cubes
  [-2.6, 1.8, false],
  [2.7, 2.2, false],
  [2.5, -1.2, false],
  [-2.4, -2.0, false],
  [1.8, -2.2, false],
  [-0.6, -2.6, false],
  [2.2, 0.3, false],
];

interface CubeData {
  targetPos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  currentPos: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  isSpecialBlue: boolean;
  scale: number;
  phase: number;
}

function PixelCubes({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Listen to mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate initial scattered vs assembled positions
  const cubes = useMemo(() => {
    return P_GRID_COORDS.map(([gx, gy, isSpecial], index) => {
      const angle = (index / P_GRID_COORDS.length) * Math.PI * 2;
      const dist = 4.5 + Math.random() * 4;

      const scatterPos = new THREE.Vector3(
        Math.cos(angle) * dist + (Math.random() - 0.5) * 3,
        Math.sin(angle) * dist + (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 6
      );

      const targetPos = new THREE.Vector3(
        gx * 1.15,
        gy * 1.15,
        isSpecial ? 0.25 : (Math.random() - 0.5) * 0.3
      );

      return {
        targetPos,
        scatterPos,
        currentPos: scatterPos.clone(),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        isSpecialBlue: isSpecial,
        scale: isSpecial ? 0.76 : 0.68 + Math.random() * 0.08,
        phase: Math.random() * Math.PI * 2,
      } as CubeData;
    });
  }, []);

  // Frame animation
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth page load assembly factor: starts at 0, ramps smoothly to 1 in ~2 seconds
    const assembleFactor = Math.min(1, time * 0.65);

    // Group gentle rotation based on mouse
    const targetGroupRotX = -mouseRef.current.y * 0.25 + Math.sin(time * 0.3) * 0.05;
    const targetGroupRotY = mouseRef.current.x * 0.35 + Math.cos(time * 0.25) * 0.06;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetGroupRotX,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetGroupRotY,
      0.05
    );

    // Scroll spread: as user scrolls down, cubes spread out and float downward into next section
    const spreadMultiplier = 1 + scrollProgress * 3.5;
    const scrollOffsetY = -scrollProgress * 6.0;
    const scrollDispersionZ = scrollProgress * 4.0;

    groupRef.current.children.forEach((child, i) => {
      const cube = cubes[i];
      if (!cube) return;

      // Interpolate from scatter to target 'P' assembly
      const basePos = new THREE.Vector3().lerpVectors(
        cube.scatterPos,
        cube.targetPos,
        assembleFactor
      );

      // Add gentle drift floating wave
      const floatY = Math.sin(time * 1.2 + cube.phase) * 0.12;
      const floatX = Math.cos(time * 0.9 + cube.phase) * 0.08;

      // Apply scroll dispersal
      const finalX = basePos.x * spreadMultiplier + floatX;
      const finalY = (basePos.y * spreadMultiplier) + floatY + scrollOffsetY;
      const finalZ = basePos.z + (scrollProgress > 0 ? (i % 2 === 0 ? 1 : -1) * scrollDispersionZ : 0);

      child.position.x = THREE.MathUtils.lerp(child.position.x, finalX, 0.08);
      child.position.y = THREE.MathUtils.lerp(child.position.y, finalY, 0.08);
      child.position.z = THREE.MathUtils.lerp(child.position.z, finalZ, 0.08);

      // Slow rotation of each cube
      child.rotation.x += cube.rotationSpeed.x;
      child.rotation.y += cube.rotationSpeed.y;
      child.rotation.z += cube.rotationSpeed.z;
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {cubes.map((cube, i) => {
        if (cube.isSpecialBlue) {
          // Main Iconic Electric Blue Pixel (#0600FC)
          return (
            <mesh
              key={i}
              position={[cube.scatterPos.x, cube.scatterPos.y, cube.scatterPos.z]}
              scale={[cube.scale, cube.scale, cube.scale]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#0600FC"
                roughness={0.15}
                metalness={0.2}
              />
            </mesh>
          );
        }

        // Main objects colored #0600FC with secondary shadow #1E1E1E attenuation for high visibility on light theme
        return (
          <mesh
            key={i}
            position={[cube.scatterPos.x, cube.scatterPos.y, cube.scatterPos.z]}
            scale={[cube.scale, cube.scale, cube.scale]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial
              color="#0600FC"
              attenuationColor="#1E1E1E"
              attenuationDistance={1.4}
              roughness={0.15}
              metalness={0.1}
              transmission={0.65}
              thickness={1.2}
              transparent
              opacity={0.85}
              clearcoat={0.9}
              clearcoatRoughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function PixelScene({ scrollProgress = 0 }: { scrollProgress: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="w-full h-full pointer-events-none"
    >
      {/* Canvas background and fog set to #F0F0F6 */}
      <color attach="background" args={["#F0F0F6"]} />
      <fog attach="fog" args={["#F0F0F6", 6, 18]} />

      {/* Studio lighting balanced for light theme */}
      <ambientLight intensity={0.85} color="#FFFFFF" />
      <directionalLight position={[6, 8, 7]} intensity={1.4} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -4]} intensity={0.5} color="#D6D6F0" />
      <pointLight position={[0, 0, 3]} intensity={0.9} color="#0600FC" distance={10} />
      
      <PixelCubes scrollProgress={scrollProgress} />
    </Canvas>
  );
}
