import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

// Extend THREE to register custom shaders
extend(THREE);

const Neptune = () => {
  const planetRef = useRef();
  const textureLoader = new TextureLoader();

  // Load Neptune's surface texture
  const texture = textureLoader.load("/textures/neptune.jpg");

  // Rotate the planet slowly
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <group>
      {/* Neptune Surface */}
      <Sphere args={[1, 64, 64]} ref={planetRef}>
        <meshStandardMaterial
          map={texture} // Apply Neptune's surface texture
          roughness={0.9} // Realistic roughness for a gaseous planet
          metalness={0.1}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshBasicMaterial
          color="#87CEEB" // Subtle blue for atmosphere
          transparent
          opacity={0.15} // Lower opacity for realism
        />
      </mesh>
    </group>
  );
};

export default Neptune;
