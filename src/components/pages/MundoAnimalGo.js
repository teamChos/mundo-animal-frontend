import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import markerIconPng from "../../images/marcador.svg"

import { Icon } from 'leaflet'

import { getPublicaciones } from '../../helpers/publicacion';
import { MapView } from '../maps/MapView'
import { MarkersGo } from '../maps/MarkersGo'
import { Spinner } from 'react-bootstrap';

export const MundoAnimalGo = () => {


    const position = [-26.1846056, -58.1828992]
    const [posicion, setPosicion] = useState([])
    const [coords, setCoords] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position)
                setPosicion([
                    position.coords.latitude,
                    position.coords.longitude
                ]);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            },
            {
                enableHighAccuracy: true,
            }
        );

        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones('busqueda/listar');
            if (resp.ok) {
                console.log(resp.publicaciones)
                setCoords(resp.publicaciones);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    console.log(posicion)

    if (cargando) {
        return (<div className="position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>)
    };

    if (!coords.length || !posicion) {
        return <div>Nada por aquí...  </div>
    };

    return (
        <>
            <div className='Map'>
                <MapContainer className='Map-container' style={{ height: '100vh', width: '100%' }} center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        position={posicion}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [35, 35], iconAnchor: [12, 41] })}
                    >
                        <Popup>
                            <div className="text-center">
                                Esta es su<br />posición actual.
                            </div>
                        </Popup>
                    </Marker>

                    <MarkersGo places={coords} />

                    {/*                 <Marker
                    position={position}
                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                >
                    <Popup>
                        Usted se <br /> encuentra aquí.
                    </Popup>
                </Marker> */}
                </MapContainer>
            </div>
        </>
    )
}
