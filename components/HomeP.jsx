/* eslint-disable no-unused-vars */
import React from "react";
// import './estilos.css'
import 'bootstrap/dist/css/bootstrap.css';
import Correccion from "./Correccion";
import { Link } from 'react-router-dom';
export function HomeP() {
    return (
        <div className="container mt-3">
            <div>
                <h1>ESCRIBIA</h1>
            </div>
            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col mt-2 text-left">
                        <h2 className="slogan">Escribe mejor, comunica mejor.</h2>
                        <div className="button">
                            <Link to="/Correccion">
                                <button type="button" className="btn btn-primary" id="button-slogan">¡Pruébalo!</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col mt-4">
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col px-2" id="home-info">
                            <p className="home-info-text">
                                EscribIA utiliza inteligencia artificial para mejorar la calidad de los textos
                                y las habilidades de redacción de los usuarios.
                            </p>
                        </div>
                        <div className="col px-2" id="home-info">
                            <p className="home-info-text">
                                Dirigido a estudiantes universitarios, EscribIA proporciona corrección gramatical
                                y consejos útiles para mejorar el texto ingresado.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col px-2" id="home-info">
                            <p className="home-info-text">
                                Pruébalo en sus tres idiomas disponibles: Inglés, Español y Alemán.
                            </p>
                        </div>
                        <div className="col px-2" id="home-info">
                            <p className="home-info-text">
                                Fácil de utilizar por cualquier usuario, EscribIA utiliza la tecnología de
                                React, Flask y OpenAI para brindar resultados precisos y rápidos.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HomeP;