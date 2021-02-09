import dynamic from 'next/dynamic';

const Rug = dynamic(() => import('../components/Rug'), { ssr: false });
const Sofa = dynamic(() => import('../components/Sofa'), { ssr: false });
const Chair = dynamic(() => import('../components/Chair'), { ssr: false });
const Credenza = dynamic(() => import('../components/Credenza'), {
  ssr: false,
});
const RecordPlayer = dynamic(() => import('../components/RecordPlayer'), {
  ssr: false,
});

const Scene = () => {
  return (
    <group>
      <Rug scale={[0.8, 0.8, 0.8]} position={[0, -20, 0]} />
      <Sofa scale={[30, 30, 30]} position={[-50, 0, 10]} />
      <Chair scale={[4, 4, 4]} rotation={[0, 60, 0]} position={[50, -10, 30]} />
      <Credenza scale={[0.04, 0.04, 0.04]} position={[0, -15, -50]} />
      <RecordPlayer scale={[30, 30, 30]} position={[0, 15, -50]} />
    </group>
  );
};

export default Scene;
