import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Buscar from "./paginas/Buscar";
import './App.css';
function Inicio() {
    const navigate = useNavigate();
    const [ciudad, setCiudad] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleChangeCiudad = (e) => {
        setCiudad(e.target.value);
        if (mensajeError) setMensajeError('');
    };

    const handleEntrar = async () => {
            if (!ciudad) {
                setMensajeError('Primero debes ingresar una ciudad');
                return;
            }

            if (!ciudad.trim()) {
                setMensajeError("Ingresa la ciudad");
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/ciudad/respuesta', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ciudad })
                });

                const data = await response.json();

            } catch (error) {
                setMensajeError('Error al conectar con el servidor');
                console.error(error);
            }
        };

    return (
        <div className="App">
            <div className="contenido">
                <h1>Bienvenido a visualización del clima</h1>

                     <h2>Ingresa ciudad</h2>
                     <input
                         type="text"
                         placeholder="Ciudad"
                         value={ciudad}
                         onChange={handleChangeCiudad}
                         className="ciudad-input"
                     />


                 <button className="boton-buscar" onClick={(handleEntrar) => navigate('/buscar')}>
                     Buscar
                 </button>
            </div>
        </div>


    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/buscar" element={<Buscar />} />
        </Routes>
    );
}

export default App;
