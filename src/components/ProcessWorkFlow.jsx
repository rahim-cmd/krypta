import React from 'react'

const ProcessWorkFlow = () => {
  return (
    <>
      <div className="row p-5">
        <div className="container text-center mb-5">

        <h3>Process Flow</h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <img className="img-fluid" src="/images/projectflow/process-flow.png" alt="project-flow" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 text-left">
            <p>At Krypta Tech, we follow a standard process and workflow for every BIM-related task which is then monitored by our in-house Technical Team of expert Coordinators. Our BIM coordination & Clash detection services have various benefits for you to include in your upcoming project like Coordinated 3D models, clash-free models, reduced rework, Improved planning and executions, enhanced Constructability & cost savings.</p>
            <p>We follow a standard procedure for the BIM coordination process.</p>
            <ul>
                <li className='text-warning' style={{fontSize:"20px",fontWeight:"bolder",fontFamily:'Arial'}}>Project kick-off</li>
                <p style={{fontSize:"16px",fontWeight:"normal",fontFamily:'DM Sans,sans-serif'}}>Here we define the Scope of Work & Deliverables from the client, which gives us clarity on the tasks and Time required to complete them.</p>
                <li className='text-warning' style={{fontSize:"20px",fontWeight:"bolder",fontFamily:'Arial'}}>Model Creation</li>
                <p style={{fontSize:"16px",fontWeight:"normal",fontFamily:'DM Sans,sans-serif'}}>We create detailed 3D models according to the inputs received from the client.</p>
                <li className='text-warning' style={{fontSize:"20px",fontWeight:"bolder",fontFamily:'Arial'}}>Clash Matrix creation</li>
                <p style={{fontSize:"16px",fontWeight:"normal",fontFamily:'DM Sans,sans-serif'}}>After creating a 3D model, we develop a clash matrix and conduct a multidisciplinary clash test to identify & prioritize clashes. For major design clashes, we conduct workshop meetings with all stakeholders to work together and find a common solution.</p>
                <li className='text-warning' style={{fontSize:"20px",fontWeight:"bolder",fontFamily:'Arial'}}>Multidisciplinary Clash Detection</li>
                <p style={{fontSize:"16px",fontWeight:"normal",fontFamily:'DM Sans,sans-serif'}}>For major design clashes between multiple disciplines, we conduct workshop meetings with all stakeholders to review, adjust and propose new design modifications, if any.</p>
                <li className='text-warning' style={{fontSize:"20px",fontWeight:"bolder",fontFamily:'Arial'}}>Approval</li>
                <p style={{fontSize:"16px",fontWeight:"normal",fontFamily:'DM Sans,sans-serif'}}>We perform and resolve major clashes and provide a detailed report which states how many clashes and what type of clashes were resolved. This provides an error-free BIM model which helps in monitoring ongoing projects and on-site executions.</p>
            </ul>
        </div>
      </div>
    </>
  )
}

export default ProcessWorkFlow
