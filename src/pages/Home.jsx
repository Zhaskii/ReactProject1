import React from 'react'
import { travels, images, tours, reviews, category } from '../data/data'
import pic1 from '../data/pic1.webp'

function Home() {
  return (
    <>
      <div className='bg position-relative'>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1>Find Next Place To Visit</h1>
          <p>Discover amzaing places at exclusive deals</p>
          <div className='d-flex gap-1'>
            <section className='box '>
              <input type="text" placeholder='Keywords' className='border border-0' />
              <i class="bi bi-search text-black"></i>
            </section>
            <section className='box'>
              <input type="text" placeholder='Destination' className='border border-0' />
              <i class="bi bi-caret-down-fill text-black"></i>
            </section>
            <section className='box'>
              <input type="text" placeholder='Duration' className='border border-0' />
              <i class="bi bi-caret-down-fill text-black"></i>
            </section>
            <section className='search'>
              <h6 className=''>Search</h6>
            </section>
          </div>
        </div>
        <div className='info position-absolute top-100 start-50 translate-middle row'>
          <div className=' text-light d-flex justify-content-evenly gap-4 p-4 col-lg-12 ' >
            {travels.map((a) => (
              <div key={a.id}>
                <i class="bi bi-globe-central-south-asia fs-2"></i>
                <h4 className='fs-5'>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='dest row text-center'>
        <div className='col-lg-12'>
          <h1>Popular Destinations</h1>
          <a href='#' className='org fw-medium'>View All Destinations <span><i class="bi bi-arrow-right"></i></span></a>
        </div>
      </div>
      <div className='container'>
        {images.map((a) => (
          <div className='row'>
            <div className='col-lg-8 here1'>
              <img className='img w-100 p-3' src={a.first} alt="" srcset="" />
              <p className='up1 '>Paris</p>
            </div>
            <div className='col-lg-4 here'>
              <img className='img p-3' src={a.second} alt="" />
              <p className='up'>Columbia</p>
            </div>
            <div className='row'>
              <div className='col-lg-4 here'>
                <img className='img p-3' src={a.third} alt="" />
                <p className='up'>Spain</p>
              </div>
              <div className="col-lg-4 here">
                <img className='img p-3' src={a.four} alt="" />
                <p className='up'>Jupiter</p>
              </div>
              <div className="col-lg-4 here">
                <img className='img p-3' src={a.five} alt="" />
                <p className='up'>Uranus</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row text-center'>
        <div className='col-lg-12 p-5'>
          <h1>Popular Tours</h1>
          <a href='#' className='org fw-medium'>View All Destinations <span><i class="bi bi-arrow-right"></i></span></a>
        </div>
        <div className="d-flex justify-content-around">
          {tours.map((a) => (
            <div className='row  shadow' key={a.id}>
              <div className="col-lg-10 position-relative ">
                <img className='img1 p-4' src={a.img} alt="" />
                <p className='as fw-medium p-2 fixed'>Best Seller</p>
                <p className='fw-bold'><span><i class="bi bi-lightning-charge-fill p-2 org"></i></span>{a.info}</p>
                <div className='d-flex justify-content-between'>
                  <span className='org'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><p>(2 reviews)</p></span>
                  <div>
                    <p className='text-decoration-line-through'>$4500</p>
                    <p className='org fw-bold fs-4'>$3500</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section>
        <a href="https://www.youtube.com/watch?v=UfEiKK-iX70">
          <div className='vid position-relative'>
            <div className='position-absolute top-50 start-50 translate-middle'>
              <i class="bi bi-play-circle text-light icon"></i>
              <h1 className='text-light'>Travelling Highlights</h1>
              <p className='org text-center fw-medium fs-4'>Your New Traveling Idea</p>
            </div>
          </div>
        </a>
      </section>
      <div className='container pad'>
        <h1 className='text-center pad text-decoration-underline'>Customer Reviews</h1>
        <div className='row d-flex justify-content-between'>
          {reviews.map((a) => (
            <div className='rev col-lg-4'>
              <p className='text-center'><i class="bi bi-command fs-1 text-light "></i></p>
              <p className='text-center p'>{a.des}</p>
              <div className='d-flex align-items-center pic'>
                <img className='revimg' src={a.img} alt="" />
                <div>
                  <h6>{a.name}</h6>
                  <span className='org1'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><p className='text-light fw-lighter'>{a.pref}</p></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='b'>
        <div className="container pad">
          <div className='row'>
            <div className="col-lg-4">
              <h3 className='p-4'>Browse Tour By Category</h3>
              <ul>
                {category.map((a) => (
                  <a href="#" className='text-decoration-none org'>
                    <li className='lh-lg'>{a}</li>
                  </a>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <img className='rev shadow border border-dark' src={pic1} alt="" />
            </div>
            <div className="col-lg-4 keep">
              <h3 className='p-4'>Newsletter</h3>
              <p className='fw-lighter'>Subscribe for updates & promotions</p>
              <div className='d-flex'>
                <section className='box1'>
                  <input type="text" placeholder='Your Email Address' className='border border-0 fs-6' />
                </section>
                <section className='subscribe'>
                  <h6 className='text-light'>Subscribe</h6>
                </section>
              </div>
              <ul className="d-flex justify-content-around p-4 text-body-tertiary">
                <li className=""><i className="bi bi-facebook" /></li>
                <li className=""><i className="bi bi-twitter-x" /></li>
                <li className=""><i className="bi bi-instagram" /></li>
                <li className=""><i className="bi bi-linkedin" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
