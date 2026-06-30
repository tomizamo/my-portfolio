import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ZlabsModel } from "./ZlabsModel.jsx";

// Componente interno para la escena 3D con animación
function ZlabsScene() {
    const groupRef = useRef();
    const lightRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (groupRef.current) {
            // Rotacion rebote
            groupRef.current.rotation.z = Math.sin(time * 0.3) * 0.01;
            groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.005;

            // Flotación: sube y baja suavemente
            groupRef.current.position.y = -0.3 + Math.sin(time * 0.5) * 0.05;

            // Inclinación sutil
            groupRef.current.rotation.x = -Math.sin(time * 0.3) * 0.02;
        }

        if (lightRef.current) {
            // Luz que se mueve de derecha a izquierda
            lightRef.current.position.x = Math.sin(time * 0.25) * 4;
            lightRef.current.position.y = Math.sin(time * 0.15) * 2 + 2;
            lightRef.current.position.z = Math.sin(time * 0.1) * 2 + 3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight
                ref={lightRef}
                position={[5, 3, 5]}
                intensity={1.8}
                color="#ffffff"
            />
            <directionalLight
                position={[-3, 1, -2]}
                intensity={0.3}
                color="#818cf8"
            />
            <pointLight position={[0, 0, 0]} intensity={0.2} color="#6366f1" />

            <Environment preset="city" />

            <group
                ref={groupRef}
                position={[0, -0.3, 0]}
                scale={[0.02, 0.02, 0.02]}
            >
                <ZlabsModel />
            </group>
        </>
    );
}

export default function Zlabs() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-white p-8 flex flex-col items-center font-onest">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <h1 className="text-sm md:text-base align-text-bottom -mt-1 text-gray-400">
                    We design <span className="font-bold text-white">systems</span>
                </h1>

                {/* CANVAS 3D - Tamaño reducido y centrado */}
                <div className="w-40 h-40 md:w-120 md:h-48">
                    <Canvas
                        camera={{ position: [0, 0, 3.5], fov: 35 }}
                        className="rounded-xl"
                        dpr={[1, 2]}
                    >
                        <Suspense fallback={null}>
                            <ZlabsScene />
                        </Suspense>
                    </Canvas>
                </div>

                {/* TEXTO INFERIOR - Cerca del modelo */}
                <p className="text-sm md:text-base tracking-wide text-gray-400">
                    for <span className="font-bold text-white">signal</span> and <span className="font-bold text-white"> sense</span>
                </p>
            </div>
            <section className="max-w-3xl w-full flex flex-col items-center">
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    ZLABS started with a quiet frustration: Beautiful objects designed to be replaced, not repaired. We got tired of that. So we started building our own.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    What we make
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    Audio hardware. Modular synthesizers. Signal processors. Things you can touch, patch, and understand.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    We believe a tool should be simple enough to master and complex enough to surprise you. No menus. No screens. Just knobs, switches, and the raw electricity of sound.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    We aren’t doing this out of nostalgia. We do it because we believe in tools that last longer than a product cycle.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    The process
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    Every project begins with a moment: a sound you can’t get out of your head, or a workflow that feels broken. We sketch, we build, we listen, we refine. Sometimes the first idea is wrong, and we start over. That is part of the process.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    The best part is when the object you imagined appears in front of you—working exactly as you intended. That moment—that object existing in the real world—is what keeps us building.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    ZLABS.
                </p>
                <p className="text-sm md:text-base text-center font-medium text-gray-500 tracking-wide -mt-0.5">
                    Hardware for signal and sense.
                </p>

            </section>
        </main>
    );
}