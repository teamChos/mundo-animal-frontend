import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    estado: yup.string(),
    nombre: yup.string().required('El nombre de la mascota es requerido'),
    nacimiento: yup.date(),
    especie: yup.string(),
    raza: yup.string(),
    genero: yup.string(),
    tamanio: yup.string(),
    color: yup.string(),
    personalidad: yup.string(),
    imagen: yup.string(),
    descripcion: yup.string(),
    detalle: yup.string(),
    telefono: yup.string()
}).required();

export const SubirPublicaciones = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = ({ recontrasenia, ...e }) => {

    };

    return (
        <form onSubmit={handleSubmit(submitForm)} className='p-3'>
            <div class="row g-3 align-items-center">
                <div class="col-3 mb-3">
                    <label for="estado" class="fw-bold form-label">Estado</label>
                    <select
                        class="form-select"
                        {...register("estado")} >
                        <option selected>Seleccione una opción</option>
                        <option value="adopcion">Adopción</option>
                        <option value="buscado">Perdido</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <label for="nombre" class="fw-bold form-label">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese nombre de la mascota"
                        {...register("nombre")} />
                    <span className="error"> {errors.nombre?.message} </span>
                </div>
                <div class="col-3 mb-3">
                    <label for="nacimiento" class="fw-bold form-label">Fecha de nacimiento</label>
                    <input
                        type="date"
                        class="form-control"
                        {...register("nacimiento")} />
                    <span className="error"> {errors.nacimiento?.message} </span>
                </div>
                <div class="col-3 mb-3">
                    <label for="especie" class="fw-bold form-label">Especie</label>
                    <select
                        class="form-select"
                        {...register("especie")} >
                        <option selected>Ingrese la especie</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <label for="raza" class="fw-bold form-label">Raza</label>
                    <select
                        class="form-select"
                        {...register("raza")} >
                        <option selected>Ingresa la raza</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <label for="genero" class="fw-bold form-label">Género</label>
                    <select
                        class="form-select"
                        {...register("genero")} >
                        <option selected>Ingresa el género</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <label for="tamanio" class="fw-bold form-label">Tamaño</label>
                    <select
                        class="form-select"
                        {...register("tamanio")} >
                        <option selected>Ingresa el tamaño</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <label for="color" class="fw-bold form-label">Color</label>
                    <select
                        class="form-select"
                        {...register("color")} >
                        <option selected>Ingresa el color</option>
                        <option value="marron">Marrón</option>
                        <option value="negro">Negro</option>
                    </select>
                </div>
                <div class="col-3 mb-3">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input" type="radio"
                            {...register("personalidad")}
                            value="sociable" />
                        <label class="form-check-label" for="personalidad">😃 Sociable</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input" type="radio"
                            {...register("personalidad")}
                            value="agresivo" />
                        <label class="form-check-label" for="personalidad">😡 Agresivo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input" type="radio"
                            {...register("personalidad")}
                            value="timido" />
                        <label class="form-check-label" for="personalidad">😨 Tímido</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input" type="radio"
                            {...register("personalidad")}
                            value="indiferente" />
                        <label class="form-check-label" for="personalidad">😐 Indiferente</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class ="form-check-label" for="inlineCheckbox1">Vacunado</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class ="form-check-label" for="inlineCheckbox2">Desparacitado</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                        <label class ="form-check-label" for="inlineCheckbox3">Castrado</label>
                    </div>
                </div>
                <div class="col-3 mb-3">
                    <label for="descripcion" class="fw-bold form-label">Descripción</label>
                    <textarea class="form-control" id="descripcion" name="descripcion" rows="3"></textarea>
                </div>

                <div class="col-3 mb-3">
                    <label for="imagen" class="fw-bold form-label">Imagen</label>
                    <input
                        class="form-control"
                        type="file"
                        {...register("img")} />
                </div>


                <div class="col-3 mb-3">
                    <label for="telefono" class="fw-bold form-label">Teléfono</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese su número de teléfono"
                        {...register("telefono")} />
                </div>
            </div>
        </form>
    )
}
