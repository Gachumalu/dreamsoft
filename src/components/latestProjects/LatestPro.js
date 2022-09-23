import React from 'react';
import lpro1 from '../images/lpro1.jpg'
import lpro2 from '../images/lpro2.jpg'
import lpro3 from '../images/lpro3.jpg'
import lpro4 from '../images/lpro4.jpg'
import lpro5 from '../images/lpro5.jpg'
import lpro6 from '../images/lpro6.jpg'
import lpro7 from '../images/lpro7.jpg'
import lpro8 from '../images/lpro8.jpg'

import ZoomInIcon from '@mui/icons-material/ZoomIn';

import '../latestProjects/LatestPro.css'

const LatestPro = () => {


    return (
        <>
            <section>
                <div className="mt-5">

                    <div className="boxLPRoject">
                        <h2 className="text-center let-title animate__animated animate__fadeInDown animate__delay-0.5s">Latest Projects</h2>
                        <p className="text-center  me-5 mt-3 animate__animated animate__fadeInUp animate__delay-0.5s">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>
                    </div>

                    <div className="lPro">
                        <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro1} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '><span><ZoomInIcon fontSize='large'/></span> Fin Step</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>

                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro2} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>Mobile Finance</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>

                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro3} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>Q-Manage</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>

                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro4} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>WeatherCast</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>

                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro5} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>Home Calendar</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>

                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro6} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>MPlanner</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>


                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro7} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span>Alice Messenger</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.</p>
                                </div>
                            </div>
                            </div>


                            <div className="lProCard animate__animated animate__zoomIn animate__delay-0.5">
                            <img src={lpro8} className="img-fluid lproimg" alt="latesProjectImg" />
                            <div className="overlay">
                                <div className="content">
                                    <h3 className='img-title '> <span><ZoomInIcon fontSize='large'/></span> WiseMoney</h3>
                                    <p className='img-cont '>We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else</p>
                                </div>
                            </div>
                            </div>

                    </div>



                </div>


            </section>
        </>
    )
}

export default LatestPro