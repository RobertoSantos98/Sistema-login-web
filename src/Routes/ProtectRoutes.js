import React from "react";
import Routering from './routes'
import UserServices from "../Services";

const userService = new UserServices();

const ProtectRoutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado();
    return usuarioAutenticado ? children : <Routering/>
}
 
export default ProtectRoutes;