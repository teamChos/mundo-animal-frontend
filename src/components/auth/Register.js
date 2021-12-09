import React, { useContext } from 'react';
import {
    Link
} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { AuthContext } from '../../auth/AuthContext';
import { startRegister } from '../../actions/auth'

import './auth.scss'

const schema = yup.object().shape({
    nombre: yup.string().required('El nombre de usuario es requerido'),
    correo: yup.string().email('El correo debe ser válido').required('El correo es requerido'),
    contrasenia: yup.string().min(8, 'La contraseña debe tener 8 caracteres').required('La contraseña es requerida'),
    recontrasenia: yup.string().oneOf([yup.ref('contrasenia'), null]).required()
}).required();

export const Register = () => {

    const { dispatch } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = ({ recontrasenia, ...e }) => {
        startRegister(e, dispatch);
    };

    return (
        <div className="m-0 d-flex justify-content-center align-items-center vh-100 auth-registro">
            <div className="p-4 bg-white shadow p-3 mb-5 bg-body rounded-3 w-auto">
                <h3 className="mb-3 fw-bold text-center">Registro</h3>

                <form onSubmit={handleSubmit(submitForm)} className="text-center">
                    <div className="text-center align-items-center">
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
                            type="email"
                            placeholder="correo"
                            {...register("correo")}
                        />
                        <span className="error"> {errors.correo?.message} </span>
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
                    <div className="text-center">
                        <input
                            className="form-control my-2"
                            type="password"
                            placeholder="confirmar la contraseña"
                            {...register("recontrasenia")}
                        />
                        <span className="error"> {errors.recontrasenia && 'Las contraseñas no coinciden'} </span>
                    </div>
                    <button
                        className="btn btn-primary m-2"
                        type="submit"
                    >
                        Registrarse
                    </button>
                    <div className="mt-1">
                        <Link
                            className="text-decoration-none"
                            to="/auth/login"
                        >
                            ¿Ya tienes una cuenta?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
