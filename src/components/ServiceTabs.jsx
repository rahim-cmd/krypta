import React from 'react'
import bimServices from './data/Bimservices'
const ServiceTabs = ({active,setActive}) => {
  return (
    
<>
<div className="row mb-5">
  {Object.keys(bimServices).map((key) => (
    <div className="col-lg-2 col-md-4 col-6" key={key}>
      <div
        className={`service-tab ${active === key ? "active" : ""}`}
        onClick={() => setActive(key)}
      >
        {bimServices[key].name}
      </div>
    </div>
  ))}
</div>

</>
  )
}

export default ServiceTabs
