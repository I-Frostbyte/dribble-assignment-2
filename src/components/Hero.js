import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero-page">
      <Navbar />
      <div id="hero-header" className="d-flex mt-4 mb-0">
        <h6 className="fw-bold">Featured</h6>
        <p className="text-muted small">View All</p>
      </div>
      <div className="row my-1">
        <div className="col-4 justify-content-start">
          <div className="card pb-4" id="card-1">
            <div className="card-body">
              <i class="bi bi-tv card-title"></i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">6589 Views</h6>
              <p class="card-text justify-content-start">
                Project Management
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-2">
            <div className="card-body">
            <i class="bi bi-broadcast card-title"> Live</i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">5413 Views</h6>
              <p class="card-text justify-content-start">
                Blockchain as a Career Option
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 justify-content-start">
          <div className="card" id="card-3">
            <div className="card-body">
              <i class="bi bi-tv card-title"></i>
              <h6 class="card-subtitle mb-2 text-muted small mt-1">6515 Views</h6>
              <p class="card-text justify-content-start">
                Accelerate digital transformation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-header" className="d-flex mt-4 mb-0">
        <h6 className="fw-bold">Upcoming</h6>
      </div>
    </div>
  )
}

export default Hero