import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Buscar.css';
function Busca() {
    const [indicador, setIndicador] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate();

    const handleChangeIndicador = (e) => {
        setIndicador(e.target.value);
        if (mensajeError) setMensajeError('');
    };

    return (
            <div className="Buscar">
                <div className="contenido">
                    <h1>Resultados de búsqueda</h1>
                    <button className="boton-volver" onClick={() => navigate('/')}>
                     Volver
                 </button>
                </div>
            </div>


        );


}
function Buscar() {
    return (
        <Routes>
            <Route path="/" element={<Busca />} />
        </Routes>
    );
}
export default Buscar;