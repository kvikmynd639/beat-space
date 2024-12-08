import React, { forwardRef, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SpacetimeFabric = forwardRef((props, ref) => {
  const fabricRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = fabricRef.current.geometry.attributes.position.array;

    // Make the waves more pronounced
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 2 + time) * 0.4 + Math.cos(y * 2 + time) * 0.4;
    }

    fabricRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={ref || fabricRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
});

export default SpacetimeFabric;
