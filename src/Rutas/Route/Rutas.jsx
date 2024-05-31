import { Perfil, Home, Eventos } from "../Paginas";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/NavBar";
import React from 'react';



const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Eventos" element={<Eventos/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default Rutas
