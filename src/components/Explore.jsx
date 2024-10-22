import React from "react";


const Explore = ({ imagenes, textos }) => {

    const informacionimg = imagenes?.informacion?.[0] || {};
    const informaciontxt = textos?.informacion?.[0] || {};

    const imagen = {
        objetivos: informacionimg.objetivos || 'img/nofound.jpg',
        mision: informacionimg.mision || 'img/nofound.jpg',
        vision: informacionimg.vision || 'img/nofound.jpg',
        logo: informacionimg.logo || 'img/nofound.jpg'
    }
    const txt = {
        objetivos: informaciontxt.objetivo || 'texto no encontrado',
        mision: informaciontxt.mision || 'texto no encontrado',
        vision: informaciontxt.vision || 'texto no encontrado',
        logo: informaciontxt.logo || 'texto no encontrado'

    }

    return (
        <>

            <div id="explore" className="container-fluid offer-section pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                        <h2 className="color1 fw-bold">¿¡Como te puedo ayudar!?</h2>
                        <h1 className="display-5 mb-4">Descubre nuestras categorias!</h1>
                        <p className="mb-0" style={{ textAlign: 'justify' }}> <strong>Pasteleria Alicia</strong> es un conglomerado de soñadores, innovadores y apasionados por la ingeniería aeronáutica. Nuestro compromiso va más allá de crear modelos: construimos experiencias que desafían los límites del diseño, la precisión y la creatividad. Cada avión que fabricamos es una oportunidad para aprender, superar obstáculos y alcanzar nuevas alturas.
                        </p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                            <div className="nav nav-pills rounded p-4 background3" >
                                <a className="accordion-link p-4 mb-4 active" data-bs-toggle="pill" href="#collapseOne">
                                    <h5 className="mb-0">Pasteleria lucida</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                    <h5 className="mb-0">Pasteleria tradicional</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                                    <h5 className="mb-0">Pasteleria artistica</h5>
                                </a>
                                <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                                    <h5 className="mb-0">Reposteria artesanal</h5>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-8 wow fadeInRight mt-3" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                            <div className="tab-content">
                                <div id="collapseOne" className="tab-pane fade p-0 active show">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src={imagen.objetivos} className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-7 mb-4 text-center">Adecuadas para toda ocasión...!</h1>
                                            <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.objetivos }}></p>

                                        </div>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="tab-pane fade p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src={imagen.mision} className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-7 mb-4 text-center">Te gustara saber que...!</h1>
                                            <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.mision }}></p>

                                        </div>
                                    </div>
                                </div>
                                <div id="collapseThree" className="tab-pane fade p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src={imagen.vision} className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-7 mb-4 text-center">Algo mas especial!</h1>
                                            <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.vision }}></p>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseFour" className="tab-pane fade p-0">
                                    <div className="row g-4">
                                        <div className="col-md-7">
                                            <img src={imagen.logo} className="img-fluid w-100 rounded" alt="" />
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="display-7 mb-4 text-center" >Postres y galletas!</h1>
                                            <p className="mb-4" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: txt.logo }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Explore;