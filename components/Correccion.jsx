/* eslint-disable no-unused-vars */
import React from 'react';
import '/styles/estilos.css'
export const Correccion = () => {

    return (
        <div className="container">
            <div>
                <h1>Corrección</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Ingresa tu texto aquí: </h3>
                        <textarea
                            className="form-control form-control-lg"
                            id="text-input"
                            rows="6" // El número de filas que se mostrarán, ajusta según tus necesidades
                            style={{ resize: 'none' }} // Evita que el usuario pueda redimensionar el área de texto
                        />
                    </div>
                    <div className="col">
                        <div className='corrected-text'>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Correccion;