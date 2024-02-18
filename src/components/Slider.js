import React from 'react'

export default function Slider() {
  return (
    <>
    <div className='container'>
<div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner  ">
    <div className="carousel-item active  ">
      <img src="https://imgscf.slidemembers.com/docs/1/1/366/healthcare_medical_service_easy_google_slides_template_365400.jpg " style={{height:400}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imgscf.slidemembers.com/docs/1/1/366/healthcare_medical_service_easy_google_slides_template_365402.jpg" style={{height:400}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imgscf.slidemembers.com/docs/1/1/366/healthcare_medical_service_easy_google_slides_template_365404.jpg" style={{height:400}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imgscf.slidemembers.com/docs/1/1/366/healthcare_medical_service_easy_google_slides_template_365408.jpg" style={{height:400}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imgscf.slidemembers.com/docs/1/1/366/healthcare_medical_service_easy_google_slides_template_365412.jpg" style={{height:400}} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</>
  )
}
