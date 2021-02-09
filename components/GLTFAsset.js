import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFAsset = ({ url, debug = false, ...props }) => {
  const gltf = useLoader(GLTFLoader, url);

  if (debug) {
    console.log({ url, gltf, scene: gltf.scene });
  }

  return <primitive {...props} object={gltf.scene} />;
};

export default GLTFAsset;
