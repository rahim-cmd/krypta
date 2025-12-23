import React from 'react'
import './customerCards.css';
const CustomerCard = ({image,title}) => {
  return (
    <div>
      <div className="service-card">
      <img src={image} alt={title} />
      <h6>{title}</h6>
    </div>
    </div>
  )
}

export default CustomerCard;
