'use client';

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Statue = () => {
    const statue = useGLTF("./statue/scene.gltf");

    return (
        <primitive object={statue.scene} scale={9} position-y={0} rotation-y={0} />
    );
};

const StatueCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 500,
                position: [-6, 5, 8],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enablePan={false}
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Statue />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default StatueCanvas;
