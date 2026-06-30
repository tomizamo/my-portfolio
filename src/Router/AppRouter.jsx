import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Landing from "../components/Landing.jsx";
import Mixer01 from "../components/Mixer01.jsx";
import Zlabs from "../components/Zlabs.jsx";

export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/mixer01" element={<Mixer01 />} />
                <Route path="/zlabs" element={<Zlabs />} />
            </Routes>
        </HashRouter>
    );
};