
import React from 'react';

export default function Landing() {
    return (
        <main className="min-h-screen w-full bg-[#000000] text-white p-8 flex flex-col justify-between
      bg-[radial-gradient(circle_at_50%_45%,_rgba(22,22,22,1)_0%,_rgba(5,5,5,1)_55%,_rgba(0,0,0,1)_100%)]">

            <header className="w-full">
        <span className="font-mono text-xs tracking-widest text-neutral-400">
          TOMÁS ZAMORANO
        </span>
            </header>

            {/* 2. GRILLA CENTRAL */}
            <section className="w-full grid grid-cols-12 gap-4 my-auto">
                <div className="col-span-12 text-center">
                    <h1 className="font-plex font-black tracking-tight text-[clamp(3rem,8vw,8rem)] leading-none">
                        TECHNICAL DESIGNER
                    </h1>
                </div>
            </section>

            {/* 3. FOOTER */}
            <footer className="w-full flex justify-end">
                <span className="font-mono text-xs text-neutral-500">// skkkkkkkkkkkkkkkkkerrriLAB LISTO</span>
            </footer>

        </main>
    );
}