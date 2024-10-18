import React from "react";
import { Link } from "react-scroll";


const Bussines = ({ imagenes }) => {

    const propuesta = imagenes?.propuesta?.[0] || {};

    const imagen = {
        imagen1: propuesta.imagen1 || 'img/nofound.jpg',
        imagen2: propuesta.imagen2 || 'img/nofound.jpg'
    }

    return (
        <>
            <div id="business" className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">

                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: ' 0.2s', animationName: 'fadeInLeft' }}>
                            <div>
                                <h2 className="color1 fw-bold">¿Cual es el plan? </h2>
                                <h1 className="display-5 mb-4">Propuestas corporativas</h1>
                                <p className="mb-4 " style={{ textAlign: 'justify' }}>Diseñamos planes y propuestas para generar un vínculo de colaboración y beneficio para todo aquel interesado en apoyar el equipo MacMotus y reportar su marca o identidad a nivel nacional e internacional. Puedes descargar la propuesta detallada dando click en el <a href="/files/propuesta.zip" download="propuesta.zip" className="color1"><strong>siguiente link.</strong></a>
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex  justify-content-center flex-column">
                                            <div className="d-flex align-items-center justify-content-center flex-row">
                                                <div><i className="fas fa-strikethrough fa-3x  color3"></i></div>
                                                <div className="ms-4">
                                                    <h4>Logotipo integrado</h4>
                                                </div>
                                            </div>
                                            <p className=" me-3 ms-3 mt-3" style={{ textAlign: 'justify' }}>Adoptamos tu logo, escudo o emblema en el avion, uniforme y articulos de mercadeo.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex justify-content-center flex-column">
                                            <div className="d-flex align-items-center justify-content-center flex-row"><i className="fas fa-file-video fa-3x me-3 color3"></i>
                                                <div className="ms-0">
                                                    <h4>Videoclip colaborativo</h4>
                                                </div></div>
                                            <p className=" me-3 ms-3 mt-3" style={{ textAlign: 'justify' }}> Promoción estrategica y apropiación colaborativa por medio de un videoclip creativo. </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex justify-content-center flex-column">
                                            <div className="d-flex align-items-center justify-content-center flex-row"><div><i className="fas fa-volume-up fa-3x ms-3 color3"></i></div>
                                                <div className="ms-4">
                                                    <h4>Contenido y divulgación</h4>
                                                </div></div>
                                            <p className=" me-3 ms-3 mt-3" style={{ textAlign: 'justify' }}>Generamos material, contenido, promoción y divulgación de marca en términos de sus políticas de privacidad y confidencialidad.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex justify-content-center flex-column">
                                            <div className="d-flex align-items-center justify-content-center flex-row"><i className="fas fa-people-carry fa-3x ms-2 color3"></i>
                                                <div className="ms-2">
                                                    <h4>Mención y reconocimiento</h4>
                                                </div></div>

                                            <p className=" me-3 ms-3 mt-3" style={{ textAlign: 'justify' }}> Reconocimiento como patrocinador y colaborador estrategico para el impulso de marca en audiencias, entrevistas o discursos.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className=" rounded position-relative overflow-hidden justify-content-center row">
                                <img src={imagen.imagen1} className="img-fluid  w-100" style={{ borderRadius: '0px 30px 0px 30px' }} alt="introduccion1" />
                                <img src={imagen.imagen2} className="img-fluid  w-100" style={{ borderRadius: '0px 0px 30px 30px' }} alt="introduccion2" />
                            </div>
                        </div>

                    </div>
                </div>
                <div id="textproposal" className="color3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '100px', marginRight: '100px', textAlign: 'center', marginBottom: '30px' }}><strong>Si has leído la propuesta valor y deseas ser participe puedes escribirnos a nuestro WhatsApp o llenar el formulario de contacto en el siguiente botón, estaremos complacidos de conocerte!.</strong></div>
                <div className="d-flex justify-content-center " ><Link className="btn botonletras rounded-pill py-2 px-4" to="donar" smooth={true} duration={300}>Participar</Link></div>

            </div>

        </>
    )
}
export default Bussines;
