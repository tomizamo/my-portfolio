import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Mixer01Model } from "./Mixer01Model.jsx";
export default function Mixer01() {
    return (
        // 2. CONTENEDOR DE SECCIÓN: Ocupa el 100% del ancho y alto de pantalla (100vh)
        <section id="Mixer01" className="w-full h-screen bg-[#0b0b0e] grid grid-cols-12 border-b border-[#D2D2C0]/20">

            {/* 3. COLUMNA IZQUIERDA: Textos e información (5 de 12 columnas) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center p-8 lg:p-16 z-10">
                <span className="font-mono text-[#FF5300] text-sm tracking-widest">ESTACIÓN AUDIO</span>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#F6F6F4] mt-2 font-sans tracking-tight">
                    MIXER-01
                </h1>
                <p className="text-[#D2D2C0] mt-6 text-base max-w-md leading-relaxed font-sans">
                    Controlador analógico boutique. Interfaz minimalista inspirada en el funcionalismo industrial.
                </p>
            </div>

            {/* 4. COLUMNA DERECHA: Escenario 3D (7 de 12 columnas) */}
            <div className="col-span-12 lg:col-span-7 w-full h-full relative cursor-grab active:cursor-grabbing">

                {/* Lente fov:45 simula el ojo humano */}
                <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>

                    {/* 1. Iluminación global (ambiente) */}
                    <ambientLight intensity={0.5} />

                    {/* 2. El truco mágico para los colores y brillos */}
                    <Environment preset="city" />

                    {/* 3. Control de cámara */}
                    <OrbitControls enablePan={false} maxDistance={5} minDistance={1} />

                    {/* 4. Modelo escalado */}
                    <Suspense fallback={null}>
                        <group position={[0, 0, 0]} rotation={[0, -Math.PI / 4, 0]} scale={[20, 20, 20]}>
                            <Mixer01Model />
                        </group>]
                    </Suspense>

                </Canvas>

            </div>

        </section>
    );
}