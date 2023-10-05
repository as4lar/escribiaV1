/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '/styles/estilos.css';
import logo from '/images/logo.png';
export const Navigation2 = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div>
                <nav>
                    <ul className='nav-links'>
                        <li value='home'><Link to="/" className="link-p">Home</Link></li>
                        <li ><Link to="/Correccion" className="link-p">Corrección</Link></li>

                    </ul>
                </nav>
            </div>

        </header>
    )
}
export default Navigation2