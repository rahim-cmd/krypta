import React,{useState} from 'react'
import bimServices from '../components/data/Bimservices';
import Servicecards from '../components/Servicecards';
import ServiceTabs from '../components/ServiceTabs';
import './Bim.css';


const Bimservices = () => {
   
const [activeService, setActiveService] = useState("consulting");
    
  return (
   
    <>
      
       <section className="ttm-row portfolio-section bg-img2 clearfix" id="bimServices">
            <div className="container mb-5">
              
                <div className="col-lg-12 text-center">
                    <h2>Our BIM Services</h2>
                    <p>We are a global, multidisciplinary BIM service provider, offering comprehensive solutions for the AEC industry. Operating in a dynamic and rapidly evolving industry, we deliver value through our expertise, experience, capabilities, and innovative approach. We serve all project phases, right from design to construction and even facility management. Take a look at our diverse range of services listed below.</p>

                </div>
              
                <div className="container mb-5">
                   
              
                    <ServiceTabs
                            active={activeService}
                            setActive={setActiveService}/>
                  </div>
                        
                   
               
                  
                    
            
       
      <div className="container mb-5 mt-5">
        <Servicecards
        items={bimServices[activeService].items}
        serviceKey={activeService}
        />
    </div>
        </div>
    <hr className="mb-5"/>
</section>
    </>
  )
}

export default Bimservices
