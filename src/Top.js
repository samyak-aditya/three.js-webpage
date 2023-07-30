import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, } from "@react-three/fiber";
import './top.css'
import Drone from "./drone";

const Model=()=>{
    const gltf= useGLTF("./forest/scene.gltf")

    return (
        <mesh>
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
        <primitive object={gltf.scene} scale={38.5} />
        </mesh>
    )
}

const Scene = () => {
    return (
      <Canvas 
      className="Top"
        frameloop='demand'
        shadows
        camera={{ position: [0, 15, 0], fov: 55 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Model />
      </Canvas>
    );
  };
export default Scene;
