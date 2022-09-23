import React from 'react'
import Homeimg1 from '../images/img1.jpg'
import Homeimg2 from '../images/img2.jpg'
import Homeimg3 from '../images/img3.jpg'
import '../home/Home.css'

const Header = () => {
    return (
        <>
            <section className=''>

                
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Homeimg1} className="d-block w-100 imgtran" alt="homeImg" />
              <div className="carousel-caption home-title ">
                <div className="homecontentBg">

                  <h5 className='animate__animated animate__bounceInLeft animate__delay-1s'>Second slide label</h5>
                  <p className='animate__animated animate__backInRight animate__delay-1s'>Some representative placeholder content for the second slide.</p>
                  
                </div>
                <button className="btn-1 animate__animated animate__backInUp animate__delay-2s">GET IN TOUCH</button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Homeimg2} className="d-block w-100" alt="homeImg" />
              <div className="carousel-caption home-title">
                <div className="homecontentBg">

                  <h5 className='animate__animated animate__bounceInLeft animate__delay-1s'>Second slide label</h5>
                  <p className='animate__animated animate__backInRight animate__delay-1s'>Some representative placeholder content for the second slide.</p>
                  
                </div>
                <button className="btn-1 animate__animated animate__backInUp animate__delay-2s">GET IN TOUCH</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Homeimg3} className="d-block w-100" alt="homeImg" />
              <div className="carousel-caption home-title">
                <div className="homecontentBg">

                  <h5 className='animate__animated animate__bounceInLeft animate__delay-1s'>Second slide label</h5>
                  <p className='animate__animated animate__backInRight animate__delay-1s'>Some representative placeholder content for the second slide.</p>
                  
                </div>
                <button className="btn-1 animate__animated animate__backInUp animate__delay-2s">GET IN TOUCH</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
           
            </section>
        </>
    )
}

export default Header