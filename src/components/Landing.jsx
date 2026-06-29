import React from 'react';

export default function Landing() {
    return (
        <main className="min-h-screen w-full bg-[#000000] text-white p-8 flex flex-col bg-[radial-gradient(circle_at_50%_45%,_rgba(22,22,22,1)_0%,_rgba(5,5,5,1)_55%,_rgba(0,0,0,1)_100%)]">
            <header className="w-full text-center">
                <h1 className="font-mono font-semibold text-center tracking-widest text-neutral-400">
                    TOMÁS ZAMORANO
                </h1>
            </header>

            <section className="flex-grow flex items-center justify-center">
                <h1 className="font-plex font-black tracking-tight text-[clamp(3rem,8vw,8rem)] leading-none text-center">
                    TECHNICAL DESIGN
                </h1>
            </section>

            <section className="w-full flex justify-center pb-12">
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border-l border-red-900/40 pl-4 py-4 hover:border-red-500 transition-colors cursor-pointer group">
                    <h3 className="font-display font-bold tracking-wider text-neutral-300 text-xl md:text-3xl group-hover:text-white transition-all">
                        UX/UI & INTERACTION
                    </h3>
                </div>

                {/* Habilidad 2 */}
                <div className="border-l border-red-900/40 pl-4 py-4 hover:border-red-500 transition-colors cursor-pointer group">
                    <h3 className="font-plex font-bold tracking-wider text-neutral-300 text-xl md:text-3xl group-hover:text-white transition-all">
                        3D & MOTION DESIGN
                    </h3>
                </div>

                {/* Habilidad 3 */}
                <div className="border-l border-red-900/40 pl-4 py-4 hover:border-red-500 transition-colors cursor-pointer group">
                    <h3 className="font-plex font-bold tracking-wider text-neutral-300 text-xl md:text-3xl group-hover:text-white transition-all">
                        AUDIOVISUAL PRODUCER
                    </h3>
                </div>

                {/* Habilidad 4 */}
                <div className="border-l border-red-900/40 pl-4 py-4 hover:border-red-500 transition-colors cursor-pointer group">
                    <h3 className="font-plex font-bold tracking-wider text-neutral-300 text-xl md:text-3xl group-hover:text-white transition-all">
                        HARDWARE & PROTOTYPING
                    </h3>
                </div>
                </div>
            </section>
        </main>
    );
}