import React from 'react'
import { footer } from '../data/data'

function Footer() {
  return (
    <>
      <div className='foot1'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className='org'>Call Us</h2>
              <p className='text-light'><i class="bi bi-telephone-fill p-1"></i> +6-345-3456-233</p>
              <h2 className='org'>Email</h2>
              <p className='text-light'><i class="bi bi-envelope-at-fill p-2"></i>Ask@traveltour.com</p>
            </div>
            <div className="col-lg-3">
              <h2 className='text-light'>About Us</h2>
              <ol className='lh-lg'>
                <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Our Story</li></a>
                  <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Travel Blog & Tips</li></a>
                  <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Working With Us</li></a>
                  <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'> Be Our Partner</li></a>
              </ol>
            </div>
            <div className="col-lg-3">
              <h2 className='text-light'>Support</h2>
              <ol className='lh-lg'>
                <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Customer Support</li></a>
                  <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Privacy & Policy</li></a>
                  <a href="#" className='text-decoration-none'><li className='text-dark-emphasis'>Contact Channels</li></a>
              </ol>
            </div>
            <div className="col-lg-3">
              <h2 className='text-light'>Pay Safely With Us</h2>
              {footer.map((a) => (
                <p className='text-dark-emphasis'>{a.safety}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='foot2'>
        <div className="container d-flex justify-content-between">
          <p className='text-dark-emphasis'>© 2024 Travel Tour All Rights Reserved.</p>
          <div className='d-flex'>
          <h5 className='text-dark-emphasis'>Follow Us On:</h5>
          <ul className='d-flex gap-3'>
               <a href="https://facebook.com"><li className='text-light'><i className="bi bi-facebook" /></li></a> 
               <a href="https://twitter.com"> <li className='text-light'><i className="bi bi-twitter-x" /></li></a>
              <a href="https://instagram.com"><li className='text-light'><i className="bi bi-instagram" /></li></a>  
               <a href="https://linkedin.com"><li className='text-light'><i className="bi bi-linkedin" /></li></a> 
              </ul>
              </div>
        </div>
      </div>
    </>
  )
}

export default Footer
