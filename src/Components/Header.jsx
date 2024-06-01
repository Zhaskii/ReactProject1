import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import logo from '../data/logo.webp'
 

function Header() {
  return (
    <>
      <header>
        <div className='row p-4 d-none d-lg-flex'>
            <div className='col-6'>
                <ul className='d-flex'>
                    <li><span className='p-2'><i class="bi bi-telephone-fill"></i></span> 1.820.3345.33</li>
                    <li><span className='p-2'><i class="bi bi-chat-fill"></i></span>Contact@TravelTourWP.com</li>
                </ul>
            </div>
            <div className="col-6">
                <ul className='d-flex justify-content-end gap-2'>
                    <li><h5><span className='p-2'><i class="bi bi-door-open-fill"></i></span>Login</h5></li>
                    <li><h5><span className='p-2'><i class="bi bi-person-bounding-box"></i></span>Sign Up</h5></li>
                </ul>
            </div>
        </div>
      </header>
 
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container">
   
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="" />TRAVEL TOURS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link active" aria-current="page" href="#">Pages</a>
          <a className="nav-link active" aria-current="page" href="#">Tours</a>
          <a className="nav-link active" aria-current="page" href="#">Travels</a>
          <a className="nav-link active" aria-current="page" href="#">Destinations</a>
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="bi bi-search"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/' element= {<Home />} />
</Routes>


    </>
  )
}
export default Header
