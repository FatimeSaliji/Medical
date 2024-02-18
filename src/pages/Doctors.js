import React from 'react'
import  {useEffect, useState} from 'react'



export default function Doctors() {

  const [docData, setDocData] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await fetch(
        'https://65cf8e74bdb50d5e5f5b8963.mockapi.io/Services/doctors'
      );

      const data = await response.json();
      setDocData(data);
    };
    getServices();
  }, []);
       

  return  ( 
    <>
    <div className='container'>
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content ">
        <h3 className="dt-title text-danger fs-1 d-flex justify-content-center  pb-3 pt-3">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description flex text-center justify-center items-center fs-5 mb-5">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.The list of certified doctors with years of
professional experiences.
        </p>
      </div>
      </div>

<div className='row '>


           {docData.map((service) => (
             <div className='col-sm-3 mb-5 mb-sm-5'>
               <div key={service.sid} className="card h-100" >
                   <img
                       src={`${service.doc_img}`}
                       className="card-img-top rounded" style={{ height: '250px' }}
                       alt="Service"
                   />
                   <div className="card-body  " >
                   <div className='d-flex'>
                   
                       <h5 className="card-title fw-bold text-info " >{service.name}</h5>
                        </div>   <br/>
            <p className=" text-justify text-danger fw-bold">{service.specialize}</p>
            <p className="fw-normal text-justify">{service.description}</p>
            </div>
            <div className="d-flex mx-3">
            <p className="fw-bold text-info">{service.contact}</p>
            <ul className="d-flex" style={{listStyleType: 'none'}}>
                <li className=" ">
                  <span className="   ">
                    <i className=" text-primary fa-solid fa-phone"></i> </span> </li>&nbsp;&nbsp;
                <li className="">
                  <span className="   ">
                    <i className=" text-primary fa-regular fa-envelope "></i></span></li>&nbsp;&nbsp;
                
                
              <li><a className="icon-link icon-link-hover" href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook  text-primary-emphasiz "></i></a>&nbsp;&nbsp;</li>
              <li><a className="icon-link icon-link-hover" href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram   text-danger"></i></a></li>
             
              </ul>
                </div>
                
               </div>
               </div>
           ))}
       </div>
       
   </div>
   
</>


      
  )
}
