import React from 'react';
// import mailLogo from '../../src/images/mail.png';
// import phoneLogo from '../../src/images/phone.png';
// import addressLogo from '../../src/images/address.png';
import contactLogo from '../../src/images/contactImg.jpg';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CallIcon from '@mui/icons-material/Call';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

export default function Contact() {
  return (
    <section id="contact" className="ftco-section" style={{ backgroundImage: `url(${contactLogo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-lg-10 col-md-12">
            <div className="wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center p-4 ">
                        <div className="d-flex align-items-center justify-content-center">
													<HomeSharpIcon/>
                          {/* <img src={addressLogo} alt="" style={{ width: "40px" }} /> */}
                        </div>
                        <div className="text mt-3">
                          <p><span>Address:</span> <br />India</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center p-4 ">
                        <div className="d-flex align-items-center justify-content-center">
													<CallIcon/>
                          {/* <img src={phoneLogo} alt="" style={{ width: "40px" }} /> */}
                        </div>
                        <div className="text mt-3">
                          <p><span>Phone:</span> <a href="tel://1234567920"><br />+ 1235 2355 98</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dbox w-100 text-center p-4">
                        <div className=" d-flex align-items-center justify-content-center">
													<EmailSharpIcon/>
                          {/* <img src={mailLogo} alt="" style={{ width: "40px" }} /> */}
                        </div>
                        <div className="text mt-3">
                          <p><span>Email:</span> <br /> minutementor48@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="contact-wrap p-4 border border-dark">
                    <h3 className="mb-4 text-center" style={{ fontFamily: "cursive", fontSize: "48px" }}>Get in touch with us</h3>
                    <form id="contactForm" name="contactForm" className="contactForm">
                      <div className="row">
                        <div className="col-md-12 p-2">
                          <div className="form-group">
                            <input type="text" className="form-control border border-dark" name="name" id="name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-12 p-2">
                          <div className="form-group">
                            <input type="email" className="form-control border border-dark" name="email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12 p-2">
                          <div className="form-group">
                            <input type="text" className="form-control border border-dark" name="subject" id="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-12 p-2">
                          <div className="form-group">
                            <textarea name="message" className="form-control border border-dark" id="message" cols="30" rows="8" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mx-auto p-5">
                            <center>
                              <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg" style={{ width: "50%", borderRadius: "40px", fontSize: "20px", color: "white" }}><b>Submit</b></button>
                            </center>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
