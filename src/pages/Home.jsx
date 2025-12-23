import {React} from 'react'
import Bimservices from './Bimservices';
import HeroSlider from '../components/HeroSlider';
import CustomerCardRow from './CustomerCardRow';
import Contact from '../components/Contact';

const Home = () => {
  
    
  return (
    <>
   
    <HeroSlider/>    
        
    <div className="site-main">

        
        <section className="ttm-row row-top-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt_40 mlr-30 res-767-mt-0">
                        <div className="row row-equal-height ttm-bgcolor-white box-shadow2">
                            <div className="col-lg-3 col-md-3 col-sm-12 shadow ">
                                
                                <div className="featured-icon-box style1 top-icon text-center">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                        <i className="ti ti-settings"></i>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Large Number <br/>of Services Provided</h5>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 shadow text-center">
                                
                                <div className="featured-icon-box style1 top-icon text-center ">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                        <i className="ti ti-user"></i>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Team of <br/>Experienced Engineers</h5>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 shadow text-center">
                                
                                <div className="featured-icon-box style1 top-icon text-center">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                        <i className="ti-ruler-pencil"></i>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>10+ Years <br/>of Experience</h5>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 shadow">
                                
                                <div className="featured-icon-box style1 top-icon text-center">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                        <i className="ti ti-thumb-up"></i>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>A Large Number <br/>of Grateful Customers</h5>
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
       
        <Bimservices/>
        <CustomerCardRow/>
        <Contact/>
    </>
  )
}

export default Home
