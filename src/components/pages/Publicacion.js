import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getPublicaciones } from '../../helpers/publicacion';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import markerIconPng from "../../images/marcador.svg"
import { Icon } from 'leaflet'

import { Image, Transformation } from 'cloudinary-react';

import afirmativo from '../../images/comprobado.png';
import negativo from '../../images/eliminar.png'

import './post.scss';
import { upperCase } from '../../helpers/upperCase';

export const Publicacion = () => {

    const [cargando, setCargando] = useState(true);

    const [publicacion, setPublicacion] = useState();

    const { id } = useParams();

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones(id);
            if (resp.ok) {
                setPublicacion(resp.publicacion);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, [id]);

    console.log(publicacion)

    if (cargando) {
        return (<div className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>)
    };

    return (


        <main id="container" className='my-2'>


            <div className={(publicacion.tipo === 'adopcion') ? 'item bg-primary' : 'item bg-danger'} id="item1">{upperCase(publicacion.tipo)}</div>
            <div className="item bg-light fw-bolder text-black" id="item2">{upperCase(publicacion.mascota.nombre)}</div>
            <div className="item bg-secondary" id="item3">
                <div className="item bg-light text-black m-3 p-3" id='sub-item3'>
                    <div className="item my-2 text-black">Especie <b>{upperCase(publicacion.mascota.especie)}</b></div>
                    <div className="item my-2 text-black">Raza <b>{upperCase(publicacion.mascota.raza)}</b></div>
                    <div className="item my-2 text-black">Género <b>{upperCase(publicacion.mascota.genero)}</b></div>
                    <div className="item my-2 text-black">Tamaño <b>{upperCase(publicacion.mascota.tamanio)}</b></div>
                    <div className="item my-2 text-black">Color <b>{upperCase(publicacion.mascota.color)}</b></div>
                </div>
                <div className="item m-4 p-4" id='sub-item4'>{publicacion.descripcion}</div>
            </div>
            <div className="item" id="item4"
                style={
                    {
                        backgroundImage: `url(https://res.cloudinary.com/dawjd5cx8/image/upload/b_green,c_fill,ar_1.5,w_500/v1/${publicacion.imagen})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }
                }></div>

            <div className={(publicacion.tipo === 'adopcion') ? 'item bg-danger' : 'item bg-primary'} id="item5">
                <div className="item my-2 text-white">Autor <b>{publicacion.autor.nombre}</b></div>
                <div className="item my-2 text-white">Telefono <b>{publicacion.telefono}</b></div>
            </div>

            {
                (publicacion.tipo === 'adopcion') &&
                <div className="item bg-primary text-white" id="item6">
                    <div> Vacunado {publicacion.detalle.vacunado ?
                        <img src={afirmativo} alt='' width='20' height='20' /> :
                        <img src={negativo} alt='' width='20' height='20' />} </div>
                    <div> Castrado {publicacion.detalle.castrado ?
                        <img src={afirmativo} alt='' width='20' height='20' /> :
                        <img src={negativo} alt='' width='20' height='20' />} </div>
                    <div> Desparasitado {publicacion.detalle.desparasitado ?
                        <img src={afirmativo} alt='' width='20' height='20' /> :
                        <img src={negativo} alt='' width='20' height='20' />} </div>
                </div>
            }

            {
                (publicacion.tipo === 'busqueda') &&
                <div className="item" id="item7">

                    <div className='Map'>
                        <MapContainer className='Map-container' style={{ height: '181px', width: '1296px' }} center={[publicacion.detalle.latitud, publicacion.detalle.longitud]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker
                                position={[publicacion.detalle.latitud, publicacion.detalle.longitud]}
                                icon={new Icon({ iconUrl: markerIconPng, iconSize: [35, 35], iconAnchor: [12, 41] })}
                            >
                                <Popup>
                                    <div className="text-center">
                                        Esta es su<br />posición actual.
                                    </div>
                                </Popup>
                            </Marker>


                        </MapContainer>
                    </div>


                </div>
            }


        </main >
    )
}
