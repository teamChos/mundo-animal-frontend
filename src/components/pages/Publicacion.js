import React, { useState, useEffect } from 'react'
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
        return <div>Cargando, espere un momento...  </div>
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
