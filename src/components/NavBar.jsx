import React from 'react';
import logo from "../logo.png";
import { Link } from 'react-router-dom';
import "../css/NavBar.css"

export const NavBar = () => {
    return (
        <header>
            <div className="Logo">
                <img src={logo} alt="" />
                <h1>Dia&Noche</h1>
            </div>
            <div className="Navigation">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Ropa">Ropa</Link>
                </ul>
            </div>
        </header>
    )
}
