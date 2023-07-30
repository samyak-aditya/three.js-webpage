import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, } from "@react-three/fiber";
import './drone.css';

const Model2=()=>{
    const gltf= useGLTF("./cloud/scene.gltf")

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
        <primitive object={gltf.scene} scale={1} />
        </mesh>
    )
}

const Drone = () => {
    return (
      <Canvas
        className="drone"
        frameloop='demand'
        shadows
        camera={{ position: [0, 15, 0], fov: 65 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model2 />
      </Canvas>
    );
  };
export default Drone;
