import React from "react";
import { Link } from "react-scroll";




const Progress = ({ imagenes, textos }) => {

    const avancesimg = imagenes?.avances?.[0] || {};
    const avancestxt = textos?.avances?.[0] || {};

    let txt = {};
    for (let i = 1; i < 4; i++) {
        const item = `titulo${i}`;
        const elemento = (avancestxt?.[item]?.[0] || {});
        txt[item] = elemento;
    }


    const imagen = {
        imagen1: avancesimg.imagen1 || 'img/nofound.jpg',
        imagen2: avancesimg.imagen2 || 'img/nofound.jpg',
        imagen3: avancesimg.imagen3 || 'img/nofound.jpg',
    }


    return (
        <>


            <div id="avances" className="container-fluid service pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold">¿¡Que te ofrecemos!?</h2>
                        <h1 className="display-5 mb-4 cursiva color3">Nuestras Categorias</h1>
                        <p className="mb-0" style={{ textAlign: 'justify' }}>En <strong>Pastelería Alicia</strong>, cada cliente encuentra un producto ideal para su gusto y ocasión. Nos especializamos en diversas categorías que reflejan nuestra pasión por la repostería y nuestro compromiso con la calidad. Desde bizcochos esponjosos que destacan por su ligereza, pasando por los clásicos ponqués llenos de tradición, hasta las más impresionantes creaciones artísticas con fondant. Cada categoría ha sido cuidadosamente diseñada para deleitar tus sentidos y hacer que cada momento, desde una merienda cotidiana hasta una celebración especial, sea inolvidable.</p>

                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen1} className="img-fluid rounded-top w-100" alt="Imagess" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="/" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()} >{txt.titulo1.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo1.texto }}></p>
                                    <a className="btn botonletras rounded-pill py-2 px-4 background1 color4" target="blank" href="https://wa.me/573126567098?text=Que$20precio$20tienes$20las$20tortas$20frias?">Saber Mas</a>                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen2} className="img-fluid rounded-top w-100" alt="Imagse" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="/" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()}>{txt.titulo2.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo2.texto }}></p>
                                    <a className="btn botonletras rounded-pill py-2 px-4 background1 color4" target="blank" href="https://wa.me/573126567098?text=Que$20precio$20tienes$20las$20tortas$20en%20ponqué$20decoradas?" >Saber Mas</a>                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={imagen.imagen3} className="img-fluid rounded-top w-100" alt="Images" />
                                </div>
                                <div className="rounded-bottom p-4 limit-text">
                                    <a href="##" className="h4 d-inline-block mb-4 letras" onClick={(e) => e.preventDefault()}>{txt.titulo3.titulo}</a>
                                    <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.titulo3.texto }}></p>
                                    <a className="btn botonletras rounded-pill py-2 px-4 background1 color4" target="blank" href="https://wa.me/573126567098?text=Que$20precio$20tienes$20las$20tortas$20en%20fondant?" >Saber Mas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )

}
export default Progress;
