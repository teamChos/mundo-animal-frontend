import React, { useEffect, useState } from 'react'

import { Card } from '../layout/Card';
import { getPublicaciones } from '../../helpers/publicacion';
import { NavBarSeach } from '../layout/NavBarSeach';
import { Spinner } from 'react-bootstrap';

export const Adopcion = () => {

    const [cargando, setCargando] = useState(true);

    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones('adopcion/listar?desde=0&limite=20');
            if (resp.ok) {
                setPublicaciones(resp.publicaciones);
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

    if (!publicaciones.length) {
        return <div>Nada por aquí...  </div>
    };

    return (
        <div className="row mx-0">
            <NavBarSeach />
            {/*             <div className="col-sm-2">
                <div className="card mt-4 w-100 h-100 border-0">
                    <div className='m-3'>

                        <Link to="/publicacion">
                            <Image
                                cloudName='dawjd5cx8'
                                publicId='mundo_animal/add_nmr0pu.svg'


                            >

                                <Transformation height="500" width="500" aspectRatio="1.5" crop="fill" />
                            </Image>
                        </Link>

                    </div>
                </div>
            </div> */}
            {
                publicaciones.map(mascota => (
                    <Card
                        key={mascota.uid}
                        {...mascota} />
                ))
            }
        </div>
    );
};
