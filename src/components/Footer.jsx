import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
const msgShow = (e) => {
  alert("No subscription accepted");
  e.preventDefault();
};
    const [go,setGo] = useState('');
    const [i, setI] = useState('fa-envelope');
    useEffect(() => {
  if (go === '/contact') {
      setI('fa-phone');
} else {
    setI('fa-envelope');
  }
}, [go]);
  return (
    <>
      <footer className="footer widget-footer clearfix">
        <div className="first-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ttm-footer-cta-wrapper ttm-textcolor-dark ttm-bgcolor-white">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                                    <div className="featured-icon-box iconalign-before-heading ttm-icon_element-size-lg">
                                        <div className="featured-content">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg"> 
                                                    <i className="ti ti-email"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h5>Subscribe To Our Newsletter</h5>
                                                <h6>Sign up to our mailing list to get latest updates and news from Krypta Tech.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                                    <form id="subscribe-form" className="newsletter-form" method="post" action="#" data-mailchimp="true">
                                        <div className="mailchimp-inputbox clearfix" id="subscribe-content"> 
                                            <p><input type="email" name="email" placeholder="Email Address.." required=""/></p>
                                            <p><input type="submit" onClick={msgShow} value="SUBSCRIBE"/></p>
                                        </div>
                                        <div id="subscribe-msg"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="second-footer ttm-textcolor-white">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget clearfix">
                            <div className="footer-logo">
                                <img  id="footer-logo-img" className="img-center" src="images/krypta.png" alt=""/>
                            </div>
                            <p>Engineering and Construction (AEC) sector. Our services include Technology Consulting, Lifecycle BIM Implementation, BIM & Technology Integration, BIM Automation Solutions and Custom Software Development.</p>
                        </div>
                        <div className="widget widget_text clearfix">
                            <h3 className="widget-title">Work Days</h3>
                            <div className="textwidget widget-text">
                                <div className="ttm-pricelistbox-wrapper ">
                                    <div className="ttm-timelist-block-wrapper">
                                        <ul className="ttm-timelist-block">
                                            <li>Mon - sat <span className="service-time">09am - 05pm</span></li>
                                            <li>Sunday<span className="service-time"><strong>Closed</strong></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_nav_menu clearfix">
                           <h3 className="widget-title">Our Services</h3>
                            <ul id="menu-footer-services">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_text clearfix">
                           <h3 className="widget-title">Get Free Estimate</h3>
                           <div className="textwidget widget-text">
                                <h3 className="ttm-textcolor-skincolor"><Link to="tel:+91-9763406746">+91-9763406746</Link></h3>
                                <p>Our online scheduling and payment system is safe.</p>
                                <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mt-15 mb-20" to="/contact">REQUEST WITH ONLINE FORM</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget flicker_widget clearfix">
                           <h3 className="widget-title">Address</h3>
                           <div className="ttm-flicker-widget-wrapper">
                                <address>
                                    95, Smruti Nagar, Koradi Road, Nagpur - 441111
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer-text ttm-textcolor-white">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-8 ttm-footer2-left">
                        <span><a href="https://kryptatech.com" target="_blank">Krypta Tech</a></span>
                    </div>
                    <div className="col-md-4 ttm-footer2-right">
                       <div className="social-icons">
                            <ul className="list-inline">
                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-flickr" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

   
    <a id="totop" href="#top">
        <i className="fa fa-angle-up"></i>
    </a>
    

    
    <div className="color-switcher">
  <div
    className="color-trigger"
    style={{ cursor: "pointer" }}
    onClick={(event) => {
      event.preventDefault();

      if (go != '') {
        setGo('/contact');
        window.location.href = '/contact';
      } else {
        setGo('tel');
        window.location.href = 'tel:+91-9763406746';
      }
    }}
  >
    <i className={`fa ${i}`}></i>
  </div>
</div>

    </>
  )
}

export default Footer
