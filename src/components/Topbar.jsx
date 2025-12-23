import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
      
    <div className="page">

      
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        

        
        <header id="masthead" className="header ttm-header-style-classic">
            
            <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                <div className="container">
                    <div className="ttm-topbar-content">
                        <ul className="top-contact ttm-highlight-left text-left">
                            <Link rel="stylesheet" to="tel:+91-9763406746" >
                            <li><i className="fa fa-phone"></i><strong>Client Services:</strong> <span className="tel-no"> +91-9763406746</span></li></Link>
                        </ul>
                        <div className="topbar-right text-right">
                            <ul className="top-contact">
                                <li><i className="fa fa-envelope-o"></i><strong>Email: </strong><a href="mailto:info@example.com.com">info@kryptatech.com</a></li>
                            </ul>
                            <div className="ttm-social-links-wrapper list-inline">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-flickr"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    </>
  )
}

export default Topbar
