import React from "react";
import { AppRouter } from "./Router/AppRouter.jsx";

export default function App() {
    return (
        <main className="relative min-h-screen w-full bg-black">
            <AppRouter />
        </main>
    );
}