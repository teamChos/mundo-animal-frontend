import React, { useState, useRef, useContext } from "react";

import { useHistory } from 'react-router-dom';

import { AuthContext } from "../../auth/AuthContext";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import logo from '../../images/logo-ma.svg';
import logoPost from '../../images/logo-post.svg';

import './post.scss';
import { postImage, postPublicaciones } from "../../helpers/publicacion";

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

export const UploadAdoption = () => {

  const history = useHistory();

  const { state } = useContext(AuthContext);

  const inputFileRef = useRef();

  const [image, setImage] = useState(logoPost);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = async (e) => {

    const imagen = inputFileRef.current.files[0];

    const formData = new FormData();
    formData.append('imagen', imagen);


    /*     var formdata = new FormData();
        formdata.append("imagen", fileInput.files[0], "/D:/Escritorio/dev/modelos mundoAnimal/b12dcbee-fdc9-4534-a448-a92daaf5f6ab (2).jpg"); */

/*     var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    const resp = await fetch("https://mundo-animal-restserver.herokuapp.com/uploads", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return console.log(resp); */

    const subirImagen = async (value) => {

      const {public_id, msg, ok} = await postImage('uploads', value);

      if (ok) {
        return public_id;
        /* history.replace('/adopciones') */
      } else {

        return msg;
      }
    };

    const public_id = await subirImagen(formData);

    console.log(public_id);

    const PublicacioneSchema = {
      mascota: {
        nombre: e.nombre,
        nacimiento: e.nacimiento,
        especie: e.especie,
        raza: e.raza,
        genero: e.genero,
        tamanio: e.tamanio,
        color: e.color,
        personalidad: e.personalidad
      },
      imagen: public_id,
      tipo: 'adopcion',
      detalle: {
        vacunado: e.vacunado,
        castrado: e.castrado,
        desparasitado: e.desparasitado
      },
      descripcion: e.descripcion,
      telefono: e.telefono,
      autor: state.uid,
    };

    const subirPublicacion = async (value) => {

      const resp = await postPublicaciones('adopcion/registrar', value);

      if (resp.ok) {
        console.log('tudu bem');
        history.replace('/adopciones')
      } else {
        console.log('tudu mal');
        console.log(resp);
        console.log(resp.msg);
        return resp.msg;
      }
    };

    subirPublicacion(PublicacioneSchema);

    console.log(e);
    console.log(e.nombre);
    console.log(imagen);

    console.log(PublicacioneSchema);

    console.log(PublicacioneSchema.descripcion);

  };

  const processImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    setImage(imageUrl);
  };

  return (
    <div className="bg-light post">

      <div className="container m-0 p-0">
        <main>
          <div className="py-5 m-0 px-5 text-center bg-light">
            <img className="d-block mx-auto mb-2" src={logo} alt="" width="90" height="90" />
            <h2><b>Mundo Animal</b></h2>
            <p className="lead">Below is an example form built entirely with Bootstrap’s form controls.Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>

          <div className="row g-5">
            <div className="px-5 col-md-5 col-lg-4 order-md-last text-center">
              <h4 className="d-flex justify-content-between align-items-center my-3">
                <span className="text-primary fw-bolder">Sube una foto</span>
              </h4>
              {/*               <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul> */}

              {image && <img src={image} alt="" width="160" height="160" />}

              {/* <input type="file" accept="image/*" ref={inputFileRef} onChange={processImage}></input> */}
              <div className="mb-3 mt-3">
                <input className="form-control" type="file" accept="image/*" id="imagen" ref={inputFileRef} onChange={processImage} />
              </div>

              {/* <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </form> */}


            </div>
            <div className="px-5 col-md-7 col-lg-8">
              <h4 className="my-3 fw-bolder">Dar en adopción</h4>
              <form className="needs-validation" onSubmit={handleSubmit(submitForm)}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="especie" className="form-label">Especie</label>
                    <select
                      className="form-select"
                      {...register("especie")} >
                      <option >Ingrese la especie</option>
                      <option value="perro">Perro</option>
                      <option value="gato">Gato</option>
                    </select>
                    <span className="error"> {errors.especie?.message} </span>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="genero" className="form-label">Género</label>
                    <select
                      className="form-select"
                      {...register("genero")} >
                      <option >Ingresa el género</option>
                      <option value="macho">Macho</option>
                      <option value="hembra">Hembra</option>
                    </select>
                    <span className="error"> {errors.genero?.message} </span>
                  </div>

                  <div className="col-12">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese nombre de la mascota"
                        {...register("nombre")} />
                      <span className="error"> {errors.nombre?.message} </span>
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="raza" className="form-label">Raza</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese la raza de la mascota"
                      {...register("raza")} />
                    <span className="error"> {errors.raza?.message} </span>
                  </div>

                  <div className="col-6">
                    <label htmlFor="tamanio" className="form-label">Tamaño</label>
                    <select
                      className="form-select"
                      {...register("tamanio")} >
                      <option >Ingresa el tamaño</option>
                      <option value="pequenio">Pequeño</option>
                      <option value="mediano">Mediano</option>
                      <option value="grande">Grande</option>
                    </select>
                    <span className="error"> {errors.tamanio?.message} </span>
                  </div>

                  <div className="col-6">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese el color de la mascota"
                      {...register("color")} />
                    <span className="error"> {errors.color?.message} </span>
                  </div>

                  <div className="col-12">
                    <label htmlFor="nacimiento" className="form-label">Fecha de nacimiento</label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("nacimiento")} />
                    <span className="error"> {errors.nacimiento?.message} </span>
                  </div>

                  <div className="col-12">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese el teléfono de contacto"
                      {...register("telefono")} />
                    <span className="error"> {errors.telefono?.message} </span>
                  </div>

                  <hr className="my-4" />

                  <div className="col-12 mt-0">
                    <label className="form-label mb-0 fw-bolder">Detalles médicos</label>
                  </div>
                  <div className="col-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" {...register('vacunado')} name="vacunado" id="vacunado" />
                      <label className="form-check-label" htmlFor="vacunado">
                        Vacunado
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" {...register('castrado')} name="castrado" id="castrado" />
                      <label className="form-check-label" htmlFor="castrado">
                        Castrado
                      </label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" {...register('desparasitado')} name="desparasitado" id="desparasitado" />
                      <label className="form-check-label" htmlFor="desparasitado">
                        Desparasitado
                      </label>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="col-12 mt-0">
                    <label htmlFor="email" className="form-label mb-0 fw-bolder">Personalidad</label>
                  </div>

                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input" type="radio" id="sociable"
                        {...register("personalidad")}
                        value="sociable" />
                      <label className="form-check-label" htmlFor="sociable">
                        Sociable 😃
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input" type="radio" id="agresivo"
                        {...register("personalidad")}
                        value="agresivo" />
                      <label className="form-check-label" htmlFor="agresivo">
                        Agresivo 😡
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input" type="radio" id="miedoso"
                        {...register("personalidad")}
                        value="miedoso" />
                      <label className="form-check-label" htmlFor="miedoso">
                        Miedoso 😨
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input" type="radio" id="indiferente"
                        {...register("personalidad")}
                        value="indiferente" />
                      <label className="form-check-label" htmlFor="indiferente">
                        Indiferente 😐
                      </label>
                    </div>
                  </div>


                </div>

                {/*                 <hr className="my-4" />

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="same-address" />
                  <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="save-info" />
                  <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div> */}

                <hr className="my-4" />

                <div className="col-12">
                  <label htmlFor="nacimiento" className="form-label fw-bolder">Descripción</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    rows="3"
                    placeholder="Dar una breve descripción del porque quiere darlo en adopción."
                    {...register("descripcion")}
                  />

                  <span className="error"> {errors.descripcion?.message} </span>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit">Publicar</button>
              </form>
            </div>
          </div>
        </main>

        <footer className="py-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2017–2021 Mundo Animal</p>
          {/*           <ul className="list-inline">
            <li className="list-inline-item"><a href="/#">Privacy</a></li>
            <li className="list-inline-item"><a href="/#">Terms</a></li>
            <li className="list-inline-item"><a href="/#">Support</a></li>
          </ul> */}
        </footer>
      </div>
    </div>
  );
};