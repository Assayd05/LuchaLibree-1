import { Perfil, Home, Eventos } from "../Paginas";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/NavBar";
import React from 'react';
import Register from "../../Componentes/Register/Register";
import MisBoletos from "../Paginas/Perfil/MisBoletos"
import DetallesPerfil from "../Paginas/Perfil/DetallesPerfil"




const Rutas = () => {
  return (
    
    <>
    
    <Routes>
        <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Eventos" element={<Eventos/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/MisBoletos" element={<MisBoletos/>}/>
            <Route path="/DetallesPerfil" element={<DetallesPerfil/>}/>

        </Route>
    </Routes>
    
    </>
   
  )
}

export default Rutas
