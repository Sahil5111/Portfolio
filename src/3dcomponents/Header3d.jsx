import React, { useRef ,Suspense} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import MainPreloader from "../preloaders/MainPreloader"

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    const meshRef = useRef()
    useFrame(() => {
        // meshRef.current.rotation.y += 0.001
    })

    return (
        <mesh ref={meshRef}>
            {/* <hemisphereLight intensity={0.15} groundColor='red' /> */}
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.6 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const Header3d = ({isMobile}) => {

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<MainPreloader/>}>

            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enablePan={false}
            />
            <spotLight
                position={[0, 30, 0]}
                angle={Math.PI / 3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
                />
            <spotLight
                position={[17, 30, -5]}
                angle={Math.PI / 3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
                />
            <spotLight
                position={[-17, 30, -5]}
                angle={Math.PI / 3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
                />
            <pointLight intensity={1} />
            <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default Header3d;
