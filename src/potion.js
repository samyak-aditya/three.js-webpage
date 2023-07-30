import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, } from "@react-three/fiber";
import './potion.css'
import Drone from "./drone";

const Model3=()=>{
    const gltf= useGLTF("./potion/scene.gltf")

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
        <primitive object={gltf.scene} scale={0.85} />
        </mesh>
    )
}

const Potion = () => {
    return (
      <Canvas 
      className='potion'
      
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
        <Model3 />
      </Canvas>
    );
  };
export default Potion;
