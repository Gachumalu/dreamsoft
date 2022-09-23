import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container text-uppercase ps-2">
          <Link className="navbar-brand nav-link" to="/" >Dream <span className='navlogo'>Soft</span></Link>
          <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='toggler-icon top-bar'></span>
            <span className='toggler-icon middle-bar'></span>
            <span className='toggler-icon bottom-bar'></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
            <Link className="nav-link  text-center" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-center" to="/services">Services</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-center" to="/projects">Projects</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-center" to="/team">Team</Link>
          </li>

            </ul>

          </div>
        </div>
      </nav>
</>
  )
}

export default Navbar