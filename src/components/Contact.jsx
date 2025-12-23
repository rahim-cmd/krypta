import React,{ useRef } from 'react'
import Breadcrumb from '../components/Breadcrump'
import emailjs from "@emailjs/browser";
const Contact = () => {
    const htmlForm = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendhtmlForm(
              "service_j7zxk6f",
              "template_i30srre",
              htmlForm.current,
              "ET1I6lsZFuKMM2xCf"
            )
            .then(
              (result) => {
                console.log("Email Sent:", result.text);
                alert("Email sent successfully!");
                htmlForm.current.reset();
              },
              (error) => {
                console.error("Error:", error.text);
              }
            );
        };
  return (
    <>
      
       
        <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="text-center mx-auto pb-5" style={{maxWidth: "800px"}}>
                            <p className="text-uppercase text-secondary fs-5 mb-0">Let’s Connect</p>
                            <h2 className="display-4 text-capitalize mb-3">Send Your Message</h2>
                            
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-lg-6 col-sm-12 col-md-6 col-xl-6 mb-5">
                                    <div className="htmlForm-floating border border-warning">
                                        <input type="text" name="name" className="form-control mb-2" id="name" placeholder="Your Name" required/>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 mb-5">
                                    <div className="form-floating border border-warning">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required/>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 mb-5">
                                    <div className="form-floating border border-warning">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone" required/>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 mb-5 ">
                                    <div className="form-floating border border-warning">
                                        <input type="text" name="project" className="form-control" id="project" placeholder="Project" required/>
                                           
                                        
                                    </div>
                                </div>
                                <div className="col-12 mb-5">
                                    <div className="form-floating border border-warning">
                                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required/>
                                        
                                    </div>
                                </div>
                                <div className="col-12 mb-5">
                                    <div className="form-floating border border-warning">
                                        <textarea className="form-control" name="message" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                                        
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-warning w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container justify-content-center m-5">

                    
                </div>
                            </div>
                <div className="row g-5">
                    <div className="col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="d-inline-flex bg-white w-100 h-100 border border-warning p-4">
                            <i className="ri-map-pin-user-fill" style={{fontSize:'30px',color:'orange'}}></i>
                            <div className="p-5" style={{boxShadow:"5px 5px 3px gray"}}>
                                <h4>Address</h4>
                                <p className="mb-0"> 95, Smruti Nagar,<br/> Koradi Road, <br/>Nagpur - 441111 <br/> Maharashtra(India)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp " data-wow-delay="0.4s">
                        <div className="d-inline-flex bg-white w-100 h-100 justify-content-center border border-warning p-4">
                            <i className="ri-mail-fill" style={{fontSize:'30px',color:'orange'}}></i>
                            <div className=" p-5" style={{boxShadow:"5px 5px 3px gray"}}>
                                <h4>Mail Us</h4>
                                <p className="mb-0">info@kryptotech.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="d-inline-flex bg-white w-100 h-100 justify-content-center border border-warning p-4">
                            
                            <i className="ri-cellphone-fill" style={{fontSize:'30px',color:'orange',padding:'auto'}}></i>
                            <div className=" p-5" style={{boxShadow:"5px 5px 3px gray"}}>
                                <h4>Telephone</h4>
                                <p className="mb-0">+91-9763406746</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  

    </>
  )
}

export default Contact
