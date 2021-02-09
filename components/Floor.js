import dynamic from 'next/dynamic';
const Bird = dynamic(() => import('../components/Bird'), { ssr: false });
const GLTFAsset = dynamic(() => import('../components/GLTFAsset'), {
  ssr: false,
});

const Floor = () => {
  return (
    <group>
      <GLTFAsset
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        url={`/glb/credenza.glb`}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#917257" />
      </mesh>
    </group>
  );
};

export default Floor;
