import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { LocationIcon } from "./IconLocation";

export const MapView = (props) => {

    const {coords: {latitude, longitude}} = props;

    console.log(latitude, 'hola');

    const position = [latitude, longitude]

    return (
        <div className='Map'>
            <MapContainer className='Map-container' style={{ height: 300, width: '100%' }} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={LocationIcon} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
