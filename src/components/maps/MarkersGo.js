import React from "react";
import { Marker, Popup } from "react-leaflet";
import mundoLogo from "../../images/logo-ma.svg"
import { Icon } from 'leaflet'

import { Link } from 'react-router-dom'

import { Image, Transformation } from 'cloudinary-react';

import { LocationIcon } from "./IconLocation";

export const MarkersGo = (props) => {

    const filtroCaracteristicas = (tipo) => {
        switch (tipo) {
            case 'adopcion':
                return { nombre: 'Adoptame', color: 'primary' };
            case 'busqueda':
                return { nombre: 'Perdido', color: 'danger' };
            case 'gato':
                return 'Gato';
            case 'perro':
                return 'Perro';
            case 'agresivo':
                return '😡';
            case 'sociable':
                return '😃';
            case 'miedoso':
                return '😨';
            case 'indiferente':
                return '😐';
            default:
                break;
        };
    };

    const { places } = props;

    console.log(places[1].detalle)

    const markers = places.map((place, i) => (
        <Marker key={i} position={[place.detalle.latitud, place.detalle.longitud]} icon={new Icon({ iconUrl: mundoLogo, iconSize: [30, 30], iconAnchor: [12, 41] })}>
            <Popup>
                <div className="text-center">
                    <b>{`${place.mascota.nombre} ${filtroCaracteristicas(place.mascota.personalidad)}`}</b><br />
                    <Link to={`/${place.uid}`}>
                        <Image
                            className="my-2"
                            cloudName='dawjd5cx8'
                            publicId={place.imagen}
                        >
                            <Transformation height="100" width="100" radius="10" aspectRatio="1.5" crop="fill" />
                        </Image>
                    </Link>
                    <br />se perdió<br />por esta zona.
                </div>
            </Popup>
        </Marker>
    ));

    return markers;
};