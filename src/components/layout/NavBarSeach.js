import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarSeach = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4">
                <div className="container-fluid">
                    <Link className="btn btn-outline-light" to="/adopciones/publicacion"><b>Agrega tu mascota</b></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Perros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Gatos</a>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
