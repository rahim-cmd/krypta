import React from 'react'
import Breadcrump from '../components/Breadcrump'

const About = () => {
  return (
    <div>
       <Breadcrump/>
      <section className="ttm-row about-section ttm-bgcolor-white bg-img1 break-991-colum clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        
                        <div className="ttm_single_image-wrapper mb-35">
                            <img className="img-fluid" src="images/single-img-one.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <div className="pr-10 res-991-plr-0">
                            
                            <div className="section-title clearfix">
                                <div className="title-header">
                                    <h5>ABOUT KRYPTA-TECH</h5>
                                    <h2 className="title">We Build for Your Comfort</h2>
                                </div>
                            </div>
                            <p><strong>Our services include Technology Consulting, Lifecycle BIM Implementation, BIM & Technology Integration, BIM Automation Solutions and Custom Software Development.</strong></p>
                            <p className="pt-10 pb-10">Krypta-Tech is a consulting firm working to provide collaborative solutions in the Architecture, Engineering and Construction (AEC) industry.
                                We deliver comprehensive solutions for  Virtual Design, Construction and Project Management services leveraging Building Information Modelling (BIM).
                            </p>
                            
                            <div className="separator">
                                <div className="sep-line mt_5 mb-35"></div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    
                                    <div className="featured-icon-box style2 left-icon">
                                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                            <i className="ti ti-timer"></i>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>Ontime at Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                   
                                    <div className="featured-icon-box style2 left-icon">
                                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                            <i className="ti ti-wand"></i>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>24/7 Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    
                                    <div className="featured-icon-box style2 left-icon">
                                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md"> 
                                            <i className="ti ti-medall"></i>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h5>Verified Professionals</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
