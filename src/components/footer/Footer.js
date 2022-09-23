import React from 'react'
import '../footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailLockIcon from '@mui/icons-material/MailLock';

const Footer = () => {
    return (
        <>

            <section className="section mt-5">



                <footer >
                    <div className="containers">
                        {/* <div className="row"> */}
                            {/* <div className="col-md-4 col-12"> */}

                                <div className="sec aboutus">
                                    <h2>About Us</h2>
                                    <p>Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</p>

                                    <ul className="sci">
                                        <li><a href="https://www.facebook.com/godson.malu">< FacebookIcon /></a></li>
                                        <li><a href="https://www.instagram.com/godson_malu/">< InstagramIcon /></a></li>
                                        <li><a href="tel:7039359113">< TwitterIcon /></a></li>
                                        <li><a href="tel:7039359113">< WhatsAppIcon /></a></li>

                                    </ul>
                                </div>

                            {/* </div> */}
                            {/* <div className="col-md-4 col-12"> */}
                                <div className="sec quickLinks">
                                    <h2>Quick Links</h2>
                                    <ul>
                                
                                        <li><a href="/home">About</a></li>
                                        <li><a href="/home">FAQ</a></li>
                                        <li><a href="/home">Privacy policy</a></li>
                                        <li><a href="/home">Help</a></li>
                                        <li><a href="/contact">Contect</a></li>
                                    </ul>
                                </div>

                            {/* </div> */}
                            {/* <div className="col-md-4 col-12"> */}
                                <div className="sec contact">
                                    <h2>contact Info</h2>
                                    <ul className="info">
                                        <li>

                                            <span className='mt-2'> <LocationOnIcon fontSize='large' color='error' /></span>
                                            <span>4730 Crystal Springs Dr, <br />
                                            Los Angeles, CA 90027<br />India</span>

                                        </li>


                                        <li>
                                            <span className='mt-1'><li><AddIcCallIcon fontSize='large' color='error' /></li></span>
                                            <p><a href="tel:+1 323-888-4554">+1 323-888-4554</a><br />
                                                <a href="tel:1 323-913-4688">1 323-913-4688</a>
                                            </p>
                                        </li>

                                        <li>
                                            <span className=''><li><MailLockIcon  fontSize='medium' color='error' /></li></span>
                                            <p className='contmail'><a href="mailto:info@demolink.org,">info@demolink.org</a></p>
                                        </li>
                                    </ul>

                                </div>

                    </div>
                </footer>
                <div className="copyrightText">
                    <p className='pt-3'>© 2022 DreamSoft. All rights reserved. Privacy Policy.</p>
                </div>
            </section>
        </>
    )
}

export default Footer