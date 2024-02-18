import React from 'react'
import  {useEffect, useState} from 'react'




export default function Services() {

  const [services, setServices] = useState([])
    
  useEffect(() => {
    const getServices = async () => {
      const response = await fetch(
        'https://65cf8e74bdb50d5e5f5b8963.mockapi.io/Services/services'
      );

      const data = await response.json();
      setServices(data);
    };
    getServices();
  }, []);

  return (
    <>
        <div className='container'>
        <div className="service-section" id="doctors">
      <div className="dt-title-content ">
        <h3 className="dt-title text-danger fs-1 d-flex justify-content-center pb-3 pt-3">
          <span>Our Services</span>
        </h3>

        <p className="dt-description flex text-center justify-center items-center fs-5 mb-4">
        We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.
        </p>
      </div>
      </div>
        <div className='row '>
        
        
                   {services.map((service) => (
                     <div className='col-sm-3 mb-5 mb-sm-5'>
                       <div key={service.id} className="card h-100  " >
                           <img
                               src={`${service.image}`}
                               className="card-img-top" style={{ height: '250px' }}
                               alt="Service"
                           />
                           <div className="card-body " style={{ height: '350px' }}>
                           <div className='d-flex'>
                           <img src={`${service.icon}`} className="" style={{ width: '20px' }} alt="Icon-Services" />&nbsp;
                               <h5 className="card-title fw-bold text-info " >{service.treatment}</h5>
                                </div>   <br/>
                    <p className="fw-normal text-justify">{service.description}</p>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                  
                   <li className='list-group-item'> <div className="">
                               <a href="/logiin" className="btn btn-outline-primary">Appoitment  
                               </a> 
                              
                               </div></li>
                               </ul>
                       </div>
                       </div>
                   ))}
               </div>
               
           </div>
           
       </>
  )        
       
        
}
