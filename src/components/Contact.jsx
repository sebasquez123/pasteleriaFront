import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from '../config';
const Contact = ({ textos }) => {

    const contactotxt = textos?.contacto?.[0] || {};
    const informaciontxt = textos?.informacion?.[0] || {};

    const txt = {
        nombre: informaciontxt.nombre || 'texto no encontrado',
        direccion: contactotxt.direccion || 'texto no encontrado',
        correo: contactotxt.correo || 'texto no encontrado',
        telefono: contactotxt.telefono || 'texto no encontrado',
    }


    const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', comentario: '' });
    const [mensaje, setMensaje] = useState({ titulo: '', cuerpo: '' });
    const [alerthandler, setAlert] = useState('hidealert');
    const [niebla, setNiebla] = useState('');
    const [spiner, setSpiner] = useState('spinerhide');

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    async function sendmessage(e) {
        e.preventDefault();
        // const response = await axiosdata('http://localhost:3003/api/v1/donations/insertDonations');
        const response = await axiosdata(config.serverPath + '/donations/insertDonations');


        await setMensaje(response);
        await setSpiner('spinerhide');
        await setAlert('showalert');
        await setNiebla('cubrirpantalla');
        document.body.style.overflow = await 'hidden';

    }

    const axiosdata = async (url) => {

        try {

            await setSpiner('spinershow');
            const response = await axios.post(url, form);
            if (!response.statusText === 'OK') { throw new Error(`Error al obtener los datos del servidor`); }
            await setForm({ nombre: '', correo: '', telefono: '', comentario: '' });



            return await { titulo: 'Muy bien', cuerpo: 'Mensaje enviado con exito, Gracias por ser parte de Alicia!!' };

        }
        catch (error) {
            console.log('Error al obtener los datos:', error.response.data);
            return await { titulo: 'Ups!', cuerpo: "Esta sección esta desactivada, vuelve a intentar en un rato!" };
        }
    }





    return (
        <>
            <div id="contact" className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                <h2 className="color1 fw-bold">¿¡Donde encontrarnos!?</h2>
                                <h1 className="display-5 mb-4 color3 cursiva">Contacta con nosotros</h1>
                                <p className="mb-0 color3 " style={{ textAlign: 'justify' }}>En <em><strong>{txt.nombre}</strong></em>, estamos encantados de saber de ti y de poder ser parte de tus momentos más especiales. Ya sea que necesites más información, desees hacer un pedido personalizado o simplemente quieras conocer más sobre nuestros productos, no dudes en contactarnos. Estamos comprometidos en brindarte la mejor atención. ¡Si tienes alguna queja, solicitud o simplemente deseas regalar un lindo comentario, puedes hacerlo por estos medios!.
                                </p>
                                <br />
                                <div className="bg-light rounded p-5 mb-5">
                                    <h4 className="color3 mb-4 fw-bold">CONTACTO</h4>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon color3 mb-4">
                                                    <i className="fas fa-map-marker-alt fa-3x "></i>
                                                </div>
                                                <div>
                                                    <h4>Dirección</h4>
                                                    <p className="mb-0">{txt.direccion}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon color3 mb-4">
                                                    <i className="fas fa-envelope fa-3x"></i>
                                                </div>
                                                <div>
                                                    <h4>Correo Electronico</h4>
                                                    <p className="mb-0">{txt.correo}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-add-item">
                                                <div className="contact-icon color3 mb-4">
                                                    <i className="fa fa-phone-alt fa-3x"></i>
                                                </div>
                                                <div>
                                                    <h4>Telefono</h4>
                                                    <p className="mb-0">{txt.telefono}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="donar" className="bg-light p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <h4 className="color3 fw-bold">Dejanos saber que estas ahí</h4>
                                    <p className="mb-4" style={{ textAlign: 'justify' }}>Si deseas obtener un 15% de descuento en tu proxima compra; hacer un <strong>comentario, solicitar contacto</strong>, o acceder a la <strong>proximos descuentos y promociones</strong>, puedes hacerlo a continuación... Recuerda, al darle enviar, estas confirmando que has leído y aceptado atentamente los términos de <Link className="color1 fw-bold" to="/politicas_de_privacidad">tratamiento de datos y confidencialidad</Link>.</p>
                                    <form onSubmit={sendmessage}>
                                        <div className="row g-4">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control border-0" id="name" placeholder="Your Name" name='nombre' value={form.nombre} onChange={handleChange} required />
                                                    <label htmlFor="name">Nombre</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control border-0" id="email" placeholder="Your Email" name='correo' value={form.correo} onChange={handleChange} required />
                                                    <label htmlFor="email">Correo</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="form-floating">
                                                    <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" name='telefono' value={form.telefono} onChange={handleChange} required />
                                                    <label htmlFor="phone">Telefono</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: '160px' }} name='comentario' value={form.comentario} onChange={handleChange} required></textarea>
                                                    <label htmlFor="message">Message</label>
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <input type="submit" className="btn botonletras w-100 py-3 background1  color4" value="Enviar mensaje" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>



                            <div id="formalert" className={`alert alert-success background2 m-0 ${alerthandler}`} role="alert">
                                <h4 className="alert-heading">{mensaje.titulo}</h4>
                                <p>{mensaje.cuerpo}</p>
                                <hr />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ width: '5px' }}></div>
                                    <div style={{ width: '220px' }}><button className="btn botonalert w-100 py-3" onClick={() => { setAlert('hidealert'); setNiebla(''); document.body.style.overflow = 'auto'; if (mensaje.titulo === 'Muy bien') { setMensaje({ titulo: '', cuerpo: '' }); window.location.reload(); } setMensaje({ titulo: '', cuerpo: '' }); }} >Continuar</button></div>
                                </div>
                            </div>
                            <div className={niebla}></div>

                            <div className={spiner}>
                                <div className="spinner-border color2 " role="status"></div>
                                <strong className="color3" style={{ fontSize: '20px', marginLeft: '15px' }}>Enviando...</strong>
                            </div>


                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className="rounded h-100">
                                <iframe id="iframeapigoogle" className="rounded h-100 w-100" style={{ height: '400px' }} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=carrera%2025%20pereira%20calle%2068b+(Your%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="apigooglemaps"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;