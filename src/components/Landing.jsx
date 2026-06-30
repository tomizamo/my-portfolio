import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <main className="relative min-h-screen md:h-screen w-full bg-[#050505] text-white p-8 overflow-hidden grid grid-cols-12 grid-rows-6 gap-4 bg-[radial-gradient(circle_at_50%_45%,_rgba(22,22,22,1)_0%,_rgba(5,5,5,1)_55%,_rgba(0,0,0,1)_100%)]">
            <header className="col-span-12 row-span-1 flex justify-center items-start pt-2">
                <h1 className="font-mono font-semibold text-[24px] tracking-widest text-neutral-400 select-none">
                    TOMÁS ZAMORANO
                </h1>
            </header>

            <section className="col-span-12 row-start-2 md:row-start-3 row-span-2 flex items-center justify-center select-none">
                <h1 className="font-plex font-semibold text-[clamp(48px,8vw,128px)] tracking-tight leading-none text-center">
                    TECHNICAL DESIGN
                </h1>
            </section>

            <section className="col-span-12 row-start-5 row-span-1 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-6 md:gap-0 pb-4 px-4 lg:px-12 xl:px-20">
                <div className="flex justify-center text-center">
                    <h3 className="font-grotesk font-medium text-[16px] xl:text-[22px] text-white select-none">
                        UX/UI & INTERACTION
                    </h3>
                </div>
                <div className="flex justify-center text-center">
                    <h3 className="font-grotesk font-medium text-[16px] xl:text-[22px] text-white select-none">
                        3D & MOTION DESIGN
                    </h3>
                </div>
                <div className="flex justify-center text-center">
                    <h3 className="font-grotesk font-medium text-[16px] xl:text-[22px] text-white select-none">
                        AUDIOVISUAL PRODUCER
                    </h3>
                </div>
                <div className="flex justify-center text-center">
                    <h3 className="font-grotesk font-medium text-[16px] xl:text-[22px] text-white select-none">
                        HARDWARE & PROTOTYPING
                    </h3>
                </div>
            </section>
            <Link
                to="/zlabs"
                className="w-[120px] h-[50px] md:w-[150px] md:h-[70px] flex items-center justify-center rounded-[100px] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all absolute bottom-8 right-8 md:top-auto z-50 cursor-pointer">
             <span className="font-sans font-bold text-[24px] md:text-[48px] -translate-y-[6px] tracking-tight leading-none text-white">
            zlabs
            </span>
            </Link>

        </main>
    );
}