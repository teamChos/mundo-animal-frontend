import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getPublicaciones } from '../../helpers/publicacion';

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
        <div className='container-grid'>
            <div className='grid'></div>
            <div className='grid'></div>
            <div className='grid'></div>
            <div className='grid'></div>
            <div className='grid'></div>
            <div className='grid'></div>
        </div>
    )
}
