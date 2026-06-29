import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Landing from "./components/Landing.jsx";

export default function App() {
    // Declaramos el estado de memoria: por defecto empieza en FALSE (apagado)
    const [mostrarModelo3D, setMostrarModelo3D] = useState(false);

    return (
        <main className="relative min-h-screen w-full bg-black">

            {/* Renderizado Condicional: SI el estado es falso (!) mostramos la Landing Page */}
            {!mostrarModelo3D && (
                <div className="relative z-10">
                    <Landing />

                    {/* BOTÓN INTERRUPTOR (Temporal para que pruebes la lógica) */}
                    <div className="absolute bottom-8 right-8 z-50">
                        <button
                            onClick={() => setMostrarModelo3D(true)} // Cambia el estado a TRUE
                            className="bg-neutral-900 text-white font-display px-6 py-2 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition-all"
                        >
                            zlabs
                        </button>
                    </div>
                </div>
            )}

            {/* SI el estado es verdadero, montamos el canvas 3D de tu mixer */}
            {mostrarModelo3D && (
                <div className="relative z-20">
                    <Hero />

                    {/* Botón para "volver atrás" y apagar el modelo */}
                    <button
                        onClick={() => setMostrarModelo3D(false)} // Cambia el estado a FALSE
                        className="absolute top-8 right-8 z-50 font-mono text-xs text-neutral-400 hover:text-white"
                    >
                        [ X CERRAR LAB ]
                    </button>
                </div>
            )}

        </main>
    );
}