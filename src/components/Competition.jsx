import React from "react";



const Competition = ({ imagenes, textos }) => {


    const competenciaimg = imagenes?.competencia?.[0] || {};
    const competenciatxt = textos?.competencia?.[0] || {};

    let txt = {};

    for (let i = 1; i < 5; i++) {
        const item = `titulo${i}`;
        const elemento = (competenciatxt?.[item]?.[0] || {});
        txt[item] = elemento;

    }

    const imagen = {
        imagen1: competenciaimg.imagen1 || 'img/nofound.jpg',
    }
    return (
        <>
            <div id="competition" className="container-fluid feature pb-5">
                <div style={{ width: '100%', height: '830px', position: 'absolute', zIndex: '-1000', overflow: 'hidden', left: '0' }}> <img className="degradado" src={imagen.imagen1} style={{ height: 'auto', width: '100%', objectFit: 'cover', opacity: '20%', }} alt="sf" /></div>

                <div className="container pb-4">
                    <div className="text-center mx-auto pb-5 pt-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '80%', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold "> ¿¡Como comprar!?</h2>
                        <h2 className="display-5 mb-4 color3 cursiva" >Recomendaciones para hacer tu cotización</h2>
                        <p className="mb-0 color3" style={{ textAlign: 'justify' }}>Somos una empresa dedicada a atender tus necesidades de manera personalizada, por lo que te recomendamos seguir los siguientes pasos para hacer de tu experiencia algo mas sencillo y eficaz. <br /> Ya sabes o tienes idea de que deseas comprar o solo deseas COTIZAR tu idea pero no conoces como hacerlo? Esto es para ti.
                        </p>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4 " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-birthday-cake fa-4x color3"></i>
                                </div>
                                <h4 className="color3">{txt.titulo1.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: txt.titulo1.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4  " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-cash-register fa-4x color3"></i>
                                </div>
                                <h5 className="color3">{txt.titulo2.titulo}</h5>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: txt.titulo2.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4  " style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-boxes fa-4x color3"></i>
                                </div>
                                <h5 className="color3">{txt.titulo3.titulo}</h5>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: txt.titulo3.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                            <div className="feature-item p-4" style={{ flexDirection: 'column', display: 'flex', justifyContent: 'normal', minHeight: '410px' }}>
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-shipping-fast fa-4x color3"></i>
                                </div>
                                <h4 className="color3">{txt.titulo4.titulo}</h4>

                                <p className="mb-4" style={{ textAlign: 'justify', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: txt.titulo4.texto }}></p>
                                <div style={{ height: '100%' }}></div>
                            </div>
                            <div style={{ position: 'relative', left: '30px', bottom: '15px' }}>
                                <i className="fas fa-quote-right fa-2x color1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center " ><a className="btn botonletras rounded-pill py-2 px-4 background1 color4" href="https://wa.me/573126567098?text=Como$20puedo$20hacer$20una$20compra?" target="blank">Saber mas</a></div>
            </div >
        </>
    )
}
export default Competition;