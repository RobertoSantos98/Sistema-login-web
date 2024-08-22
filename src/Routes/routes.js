import React from "react";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import ProtectRoutes from "./ProtectRoutes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login/>} />
                <Route path="/cadastrar" element={<Cadastro/>} />
                <Route path="/home" element={
                    <ProtectRoutes>
                     <h1>Tela Home</h1>
                    </ProtectRoutes>
                    }
                />
            </Routes>
        </Router>
    )
}

export default Routering;