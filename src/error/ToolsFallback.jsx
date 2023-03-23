import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Float, Decal, useTexture } from "@react-three/drei"

import ToolsPreloader from "../preloaders/ToolsPreloader"

function Sticker({ url, position, rotation }) {
    const icon = useTexture(url)
    return (
        <Decal
            position={position}
            rotation={rotation}
            scale={1.5}
            map={icon}
            flatShading
        />
    )
}

const Mesh = ({ data }) => {
    return (
        <Float speed={1.25} rotationIntensity={1} floatIntensity={2}>
            <mesh rotation={[Math.PI/6,Math.PI/4,0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading />
                {data.list.map(e => (<Sticker key={e.name} url={e.url} position={e.position} rotation={e.rotation} />))}
            </mesh>
        </Float >
    )
}

function ToolsFallback({ data }) {
    return (
        <div className="flex place-content-center">

            <div className="col-md-4 h-96 w-96">

                <Canvas>
                    <Suspense fallback={<ToolsPreloader />}></Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[10, 10, 10]} />
                    <Mesh data={data} />
                    <Preload all />
                </Canvas>
            </div>
        </div>
    )
}


export default ToolsFallback