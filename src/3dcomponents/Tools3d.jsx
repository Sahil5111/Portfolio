import React , {Suspense} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Float, Decal, useTexture } from "@react-three/drei"

import ToolsPreloader from "../preloaders/ToolsPreloader"


function Sticker({ url }) {
    const icon = useTexture(url)
    return (
        <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={icon}
            flatShading
        />
    )
}

const Sphere = ({ url }) => {
    return (
        <Float speed={1.25} rotationIntensity={1} floatIntensity={2}>
            <mesh castShadow receiveShadow scale={2.75} >
                <sphereGeometry args={[1, 32,16]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Sticker url={url} />
            </mesh>
        </Float>
    )
}

function Tools3d({ url }) {

    // const icon = useLoader(TextureLoader,'./assets/tech/css.png')
    return (
        <Canvas
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<ToolsPreloader/>}>

            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={0.2}/>
            <directionalLight position={[10, 10, 10]} />
            <Sphere url={url} />
            <Preload all />
            </Suspense>
        </Canvas>
    )
}


export default Tools3d