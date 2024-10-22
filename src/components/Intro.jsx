import React from "react";




const Intro = ({ imagenes }) => {


    const introduccion = imagenes?.introduccion?.[0] || {};

    const imagen = {
        imagen1: introduccion.imagen1 || 'img/nofound.jpg',
        imagen2: introduccion.imagen2 || 'img/nofound.jpg'
    }


    return (
        <>
            <div id="explore" className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: ' 0.2s', animationName: 'fadeInLeft' }}>
                            <div>
                                <h2 className="color1 fw-bold">¡Desde 2004!</h2>
                                <h1 className="display-5 mb-4 cursiva color3">¡Un poco de Nosotros!</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>En Pastelería Alicia, somos una casa familiar dedicada a crear momentos inolvidables a través de pasteles artesanales llenos de sabor y tradición. Desde nuestros inicios en 2004, hemos trabajado con pasión y amor, cuidando cada detalle en nuestras recetas para convertir ingredientes simples en pequeñas obras de arte. Con más de 20 años de experiencia, continuamos evolucionando sin perder la esencia que nos caracteriza, garantizando siempre la seguridad y calidad de nuestros productos. Nuestro compromiso es ofrecerte lo mejor, con la confianza de que cada pieza está hecha con dedicación y compromiso...
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-palette fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Amor al arte</h4>
                                                <p>Elaboramos postres artesanales con dedicación, cuidando cada detalle para emocionar con cada bocado.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><i className="fas fa-flag fa-3x color3"></i></div>
                                            <div className="ms-4">
                                                <h4>Experiencia y proyección</h4>
                                                <p>Más de 20 años perfeccionando nuestras recetas, siempre con la vista en el futuro. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="d-flex">
                                            <i className="fas fa-id-badge fa-3x me-4 color3"></i>
                                            <div>
                                                <h4>Seguridad y compromiso</h4>
                                                <p>No solo nos preocupamos por la calidad de nuestros productos, sino también por asegurar que lleguen a ti en perfectas condiciones. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                            <div className=" rounded position-relative overflow-hidden justify-content-center row">
                                <img src={imagen.imagen1} className="img-fluid  w-75" style={{ borderRadius: '30px 30px 0px 0px' }} alt="introduccion1" />
                                <img src={imagen.imagen2} className="img-fluid  w-75" alt="introduccion2" style={{ borderRadius: '0px 0px 30px 30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Intro;