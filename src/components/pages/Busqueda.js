import React, { useEffect, useState } from 'react'

import { Card } from '../layout/Card';
import { getPublicaciones } from '../../helpers/publicacion';
import { NavBarSeachLost } from '../layout/NavBarSeachLost';

export const Busqueda = () => {

    const [cargando, setCargando] = useState(true);

    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones('busqueda/listar');
            if (resp.ok) {
                setPublicaciones(resp.publicaciones);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    if (cargando) {
        return <div>Cargando, espere un momento...  </div>
    };

    if (!publicaciones.length) {
        return <div>Nada por aquí...  </div>
    };

    return (
        <div className="row mx-0">
            <NavBarSeachLost />
            {
                publicaciones.map(mascota => (
                    <Card
                        key={mascota.uid}
                        {...mascota} />
                ))
            }
        </div>
    )
}
