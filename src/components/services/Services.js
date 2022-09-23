import React from 'react'
import '../services/Services.css'
import phoneimg from '../images/phoneImg.jpg'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Services = () => {
  return (
    <>
    <section>
        <div className="container">
            <h3 className='text-center mt-5 ser-title '>Services</h3>
            <div className="row See All Services">
                <div className="col-12 col-md-4  animate__animated  animate__slideInLeft animate__delay-0.5s">
                    <img src={phoneimg} className="img-fluid text-center" alt="phoneimg" />
                </div>
                <div className="col-8">
                    <div className="container-fluid">
                    <div className="row text-center px-3 ">
                        <div className="col-12 col-md-6 card-ser animate__animated animate__zoomIn animate__delay-0.5s ">
                            <div className="box text-center">
                                <h3 className='text-center servicesTitle'>See All Services</h3>
                                <button className="btn-1 ">ALL SERVICES</button>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 card-ser animate__animated animate__zoomIn animate__delay-0.5s">
                        <div className="box text-center">
                            <div className="text-center pt-5"><PhoneCallbackIcon fontSize='large' /></div>
                                <h5 className='text-center pt-4'>CORPORATE SOLUTIONS</h5>
                                <p className='p-2'>Need specific software for your company? We are ready to develop it!</p>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 card-ser animate__animated animate__zoomIn animate__delay-0.5s">
                        <div className="box text-center">
                            <div className="text-center pt-5"><SupportAgentIcon fontSize='large' /></div>
                                <h5 className='text-center pt-4'>CALL CENTER SOLUTIONS</h5>
                                <p className='p-2'>Our experts provide custom products of any complexity for call centers.</p>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 card-ser animate__animated animate__zoomIn animate__delay-0.5s">
                        <div className="box text-center">
                            <div className="text-center pt-5"><CloudUploadIcon fontSize='large' /></div>
                                <h5 className='text-center pt-4'>CLOUD DEVELOPMENT</h5>
                                <p className='p-2'>We can also offer you reliable cloud development solutions.</p>
                            </div>
                        </div>
                    </div>
                                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services