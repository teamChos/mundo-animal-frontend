import React, { useContext } from 'react';

import {
    Link
} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { AuthContext } from '../../auth/AuthContext';
import { startLogin } from '../../actions/auth';

import './auth.scss'

import logo from '../../images/logo-ma.svg'

const schema = yup.object().shape({
    nombre: yup.string().required('El nombre de usuario es requerido'),
    contrasenia: yup.string().required('La contraseña es requerida')
}).required();

export const Login = () => {

    const { dispatch } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (e) => {
        console.log(e);
        startLogin(e, dispatch);
    };

    return (
        <div className="m-0 vh-100 autenticacion">
            <div className="p-4 mb-5 w-auto text-center auth-logo">
                <div className="m-4 d-flex align-baseline logo-texto">
                <img className="m-2 d-inline" src={logo} alt="Mundo Animal" width="75px" />
                <h1 className="m-2 d-inline fw-bold">mundo animal</h1>
                </div>
                <h2 className="w-75">Adopta, salva una vida, gana un amigo</h2>
            </div>
            <div className="p-4 bg-white shadow p-3 mb-5 bg-body rounded-3 w-auto auth">
                <h3 className="mb-3 fw-bold text-center">Bienvenido</h3>

                <form onSubmit={handleSubmit(submitForm)} value="info" className="text-center">
                    <div className="text-center">
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                            {...register("nombre")}
                        />
                        <span className="error"> {errors.nombre?.message} </span>
                    </div>
                    <div className="text-center">
                        <input
                            className="form-control my-2"
                            type="password"
                            placeholder="contraseña"
                            {...register("contrasenia")}
                        />
                        <span className="error"> {errors.contrasenia?.message} </span>
                    </div>
                    <button
                        className="btn btn-primary m-2"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    <button
                        className="btn btn-info m-2"
                        type="submit"
                    >
                        Google
                    </button>
                    <div className="mt-1">
                        <Link
                            className="text-decoration-none"
                            to="/auth/registro"
                        >
                            Regístrate aquí
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
