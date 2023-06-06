'use client';

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {

    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading={true}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='always'
            dpr={[0.5, 1]}
            gl={{ preserveDrawingBuffer: false }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
