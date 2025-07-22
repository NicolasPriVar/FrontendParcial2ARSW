import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Buscar.css';
function Buscar() {
    const [ciudad, setCiudad] = useState('');
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);
    const generar = async () => {
        setCargando(true);
        setError('');
        try {
            const response = await fetch('http://localost:8080/clima/generar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            if (data.ciudad) {
                setCiudad(data.ciudad);
            } else {
                throw new Error(data.error || 'No se recibió un código válido');
            }
        } catch (error) {
            setError(error.message || 'Hubo un error generando el código');
        } finally {
            setCargando(false);
        }
    };

}
export default Buscar;