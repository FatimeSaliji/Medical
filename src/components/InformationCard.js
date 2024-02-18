import React from 'react'


export default function InformationCard(props) {

 
  return (
    <div className="info-cards">
   
    <p className="info-card-title">{props.title}</p>
    <p className="info-card-description">{props.description}</p>
    <span className="info-card-icon">
    <a href="/Services" className="btn btn-danger mb-3">More</a></span>
           
    
  </div>
);
}
  

