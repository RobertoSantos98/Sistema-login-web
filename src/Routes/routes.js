import React from "react";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login/>} />
                <Route path="/cadastrar" element={<Cadastro/>} />
            </Routes>
        </Router>
    )
}

export default Routering;