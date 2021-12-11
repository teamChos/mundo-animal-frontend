import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

import { LocationIcon } from "./IconLocation";

export const MapView = ({ component: Component }) => {


    /*     const [coords, setCoords] = useState({
            longitude: -58.1828992,
            latitude: -26.1846056,
        }); */

    /*     useEffect(() => {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    console.log(position)
                    setCoords({
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    });
                },
                function (error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                },
                {
                    enableHighAccuracy: true,
                }
            );
        }, []); */


    const position = [-26.1846056, -58.1828992]

    /*     const [posicion, setPosicion] = useState(null); */

    //    const LocationMarker = () => {
    //
    //      const map = useMapEvents({
    //        click(e) {
    //          console.log(e.latlng)
    //        setPosicion(e.latlng)
    //      map.flyTo(e.latlng)
    //},
    /*              locationfound(e) {
    
                    console.log('aca')
                    console.log('aca')
    
                    setPosicion(e.latlng)
                    map.flyTo(e.latlng, map.getZoom())
                }, */
    //        });

    /*         return posicion === null ? null : (
                <Marker
                    position={posicion}
                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                >
                    <Popup>
                        Aquí se perdió <br /> su mascota.
                    </Popup>
                </Marker>
            )  */
    //   };

    return (
        <div className='Map'>
            <MapContainer className='Map-container' style={Component ? { height: 300, width: '100%' } : { height: '100vh', width: '100%' }} center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {Component && <Component />}

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
    )
}
