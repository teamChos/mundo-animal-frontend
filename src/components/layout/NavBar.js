import React, { useContext } from 'react';
import {
    Link
} from 'react-router-dom';

import { startLogout } from '../../actions/auth';
import { AuthContext } from '../../auth/AuthContext';

import logo from '../../images/logo-ma.svg'
import pokebola from '../../images/pokebola.png'

export const NavBar = () => {

    const { state, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        startLogout(dispatch);
    };

    console.log(state);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="mx-2" src={logo} alt="Mundo Animal" width="35px" />
                    <span>mundo animal</span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/adopciones">Adopciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/busquedas">Perdidos</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link mx-3" to="/encuentralos"><img src={pokebola} style={{height:30,width:30}} alt=""/></Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/login">{state.nombre}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLogout}>cerrar sesión</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/auth/registro">registrarse</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
