import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import SpacetimeFabric from "./SpacetimeFabric";

const Scene = () => {
  const cameraRef = useRef(); // Camera reference

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const sectionHeight = window.innerHeight; // Height of each section

      if (cameraRef.current) {
        const progress = scrollY / (3 * sectionHeight); // Normalize scroll

        // Dynamic camera movement: Move upwards and to the left
        cameraRef.current.position.set(progress * 5 - 2.5, progress * 3 - 1.5, 10);
        cameraRef.current.lookAt(0, 0, 0); // Always look at the scene center
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      {/* Stars */}
      <Stars radius={300} depth={160} count={5000} factor={6} fade />

      {/* Spacetime Fabric */}
      <SpacetimeFabric />

      {/* Perspective Camera */}
      <perspectiveCamera ref={cameraRef} />
    </Canvas>
  );
};

export default Scene;
