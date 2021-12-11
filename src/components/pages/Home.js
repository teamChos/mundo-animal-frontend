import { Image, Transformation } from 'cloudinary-react';
import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { getPublicaciones } from '../../helpers/publicacion';

import './home.scss'

export const Home = () => {

    const [adopcion, setAdopcion] = useState(null)
    const [busqueda, setBusqueda] = useState(null)

    const [cargando, setCargando] = useState(true)

    const MESES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const { ok, msg, adopcion: [publicacionAdopcion], busqueda: [publicacionBusqueda] } = await getPublicaciones('finalizado');
            if (ok) {
                setAdopcion(publicacionAdopcion);
                setBusqueda(publicacionBusqueda);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    if (cargando) {
        return (<div className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>)
    };

    const fechaAdop = new Date(adopcion.updatedAt);
    const fechaBus = new Date(busqueda.updatedAt);

    return (
        <main>
            <div className="p-4 p-md-5 my-4 text-white rounded bg-primary">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Adopta, salva una vida, gana un amigo</h1>
                    <p className="lead my-3">Somos una plataforma web que busca devolver a las mascotas perdidas a sus dueños y proporcionar un lugar donde ofrecer a nuestros animalitos en adopción.</p>
                    <p className="lead mb-0"><Link to="/adopciones" className="text-white fw-bold">Ver a las mascotas en adopción...</Link></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">Última adopción</strong>
                            <h3 className="mb-0">{adopcion.mascota.nombre}</h3>
                            <div className="mb-1 text-muted">{`${MESES[fechaAdop.getMonth()]} ${fechaAdop.getDay()}`}</div>
                            <p className="card-text mb-auto">{adopcion.descripcion}</p>
                            {/* <a href="/#" className="stretched-link">Continue reading</a> */}
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <Image
                                className="bd-placeholder-img"
                                cloudName='dawjd5cx8'
                                publicId={adopcion.imagen}
                            >
                                <Transformation height="250" width="200" aspectRatio="1.5" crop="fill" />
                            </Image>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Último rescate</strong>
                            <h3 className="mb-0">{busqueda.mascota.nombre}</h3>
                            <div className="mb-1 text-muted">{`${MESES[fechaBus.getMonth()]} ${fechaAdop.getDay()}`}</div>
                            <p className="mb-auto">{busqueda.descripcion}</p>
                            {/* <a href="/#" className="stretched-link">Continue reading</a> */}
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <Image
                                className="bd-placeholder-img"
                                cloudName='dawjd5cx8'
                                publicId={busqueda.imagen}
                            >
                                <Transformation height="250" width="200" aspectRatio="1.5" crop="fill" />
                            </Image>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-3">


                <div className="col-md-8">
                    <div className="position-sticky" style={{ top: 32 }}>
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>



                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4">
                        <h4 className="fst-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li><a href="/#">GitHub</a></li>
                            <li><a href="/#">Twitter</a></li>
                            <li><a href="/#">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>

        </main>
    )
}
