import React from 'react'
import Contact from '../components/Contact'
import Breadcrumb from '../components/Breadcrump'
const Contactus = () => {
  return (
    <>
      <Breadcrumb/>
      <div className="container justify-content-center align-items-center">
        <div className="col-12">
        <h3 className="mb-5">Know more about how we can take your project to the next level</h3>
        <p className="fs-5">Use the below form to specify if you have any queries, or you would like to request for a quotation for any of our services or products. You'll hear back from us once we've received your request.</p>
      </div>
        </div>
      <Contact/>
    </>
  )
}

export default Contactus
