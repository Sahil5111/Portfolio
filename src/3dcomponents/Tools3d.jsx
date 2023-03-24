import React, { Suspense, useState } from "react"
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
            <mesh castShadow receiveShadow scale={2.75}
            >
                <sphereGeometry args={[1, 32, 16]} />
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

function Tools3d({ url, name }) {
    const [hover, sethover] = useState(false)
    return (
        <div className="w-full h-full relative">
            {hover && <div className="absolute top-[-15%] left-[50%] -translate-x-1/2 text-center section-subtitle">{name}</div>}
            <Canvas
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                onPointerOver={() => sethover(true)}
                onPointerOut={() => sethover(false)}
            >
                <Suspense fallback={<ToolsPreloader />}>

                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[10, 10, 10]} />
                    <Sphere url={url} name={name} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}


export default Tools3d