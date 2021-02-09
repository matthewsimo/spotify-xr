import { Suspense, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Canvas, useFrame } from 'react-three-fiber';
import { Environment } from '@react-three/drei';
const OrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);
import Floor from '../components/Floor';
import Scene from '../components/Scene';

const Index = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 10, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <Scene />
          <Environment
            background={true}
            files={'lebombo_1k.hdr'}
            path="/hdri/"
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Index;
