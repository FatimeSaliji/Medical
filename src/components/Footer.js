import React from 'react'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    
    <div className="container">
      <div className="row ">
        <div className="col d-flex mt-5 mb-3">
        <img src={logo}  className='ms-5' style={{width:'180px'}} alt=''/>
        </div>
      <div className="col d-flex mt-5">
          
          <h5 className="text-danger ms-3">Follow us:</h5>
          
          <ul className="d-flex " style={{listStyleType: 'none'}}>
              <li><a className="icon-link icon-link-hover" href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook  text-primary-emphasiz "></i></a>&nbsp;&nbsp;</li>
              <li><a className="icon-link icon-link-hover" href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram   text-danger"></i></a></li>
             
          </ul>
      </div>
    <div className="col mt-5">
        <b className="text-primary">© 2024 Medical. All rights reserved.</b>
        </div>
        
       
      </div>
      </div>
      
  )
}
