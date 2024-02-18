import React from 'react'
import Slider from "../components/Slider"
import InformationCard from "../components/InformationCard";
import "../assets/style.css"


export default function Home() {
  return (
    <>
      <Slider/>
      <div className="info-section container" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
            
        />
         

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments.From comprehensive screenings
            to advanced interventions."
          
        />
      </div>

    </div>
    <div className="d-flex justify-content-center text-center mt-5">
          
              <a href="/doctors" className="btn btn-info  mb-5 text-white fw-bold" >Contact with our doctors <i class="bi bi-arrow-right"></i></a>
  </div>
    </>
  )
}
