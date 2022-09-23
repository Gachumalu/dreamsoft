import React from 'react'
import "../counter/Counter.css"

const Counter = () => {
    return (
        <>
            <section>
                <div className="container mt-5">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <h1 className='Year-count text-center'>10</h1>
                        </div>
                        <div className="col-12 col-md-6  mt-5 ps-5">
                            <div className="bordertitle">
                                <h3 className="conut-title">Years Of <br /> Experience</h3>

                            </div>

                            <p className="cout-text">DreamSoft is a team of highly experienced app designers and developers creating unique software for you.</p>
                            <button className="btn-2">GET IN TOUCH</button>

                        </div>
                        <div className="container-fluid mt-5 ">
                            <div className="row mt-1">
                                <div className="col-12 col-md-6 col-lg-3 text-center cborder ">
                                    <h1 className="c-title">2<span className="kspan">K</span></h1>
                                    <h5 className="c-text">APPS DEVELOPED</h5>

                                </div>
                                <div className="col-12 col-md-6 col-lg-3 text-center cborder">
                                    <h1 className="c-title">40</h1>
                                    <h5 className="c-text">CONSULTANTS</h5>

                                </div>
                                <div className="col-12 col-md-6 col-lg-3 text-center cborder">
                                    <h1 className="c-title">12</h1>
                                    <h5 className="c-text">AWARDS WON</h5>

                                </div>
                                <div className="col-12 col-md-6 col-lg-3 text-center cborder">
                                    <h1 className="c-title">160</h1>
                                    <h5 className="c-text">EMPLOYEES</h5>

                                </div>

                            </div>

                        </div>




                    </div>
                    <div className="container">
                    <div className="row mt-3 mb-5 text-center ms-5">
                        <div className="col-12 col-md-6 col-lg-3 text-center imgborder">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/clients-9-270x117.png" className='img-fluid' alt="cimg" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center imgborder">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/clients-10-270x117.png" className='img-fluid' alt="cimg" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center imgborder">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/clients-3-270x117.png" className='img-fluid' alt="cimg" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center imgborder">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/clients-11-270x117.png" className='img-fluid' alt="cimg" />
                        </div>

                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter