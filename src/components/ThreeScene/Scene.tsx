'use client'
import React, { useState, useEffect } from "react";
import { Preload, PerformanceMonitor, CameraControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const ModelOfHouse = dynamic(() => import('./ModelOfHouse'));

const Scene = () => {
    const [fov, setFov] = useState<number>(10);

    const [dpr, setDpr] = useState(1.5)


    // Update the FOV when the window is resized
    useEffect(() => {
        const AR = globalThis.innerWidth / globalThis.innerHeight;

        if (AR < 0.7) {
            setFov(18);
        }
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent overflow-visible">
            <Canvas camera={{ position: [0, 6, 90], fov }} dpr={dpr} >
                {/*<PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >*/}
                <ambientLight intensity={1} position={[110, -10, 90]} />
                <directionalLight intensity={1} position={[10, 10, 9]} />
                <ModelOfHouse />
                <CameraControls />
                <Preload all />
                {/*</PerformanceMonitor>*/}
            </Canvas>
        </div >
    );
};

export default Scene;
