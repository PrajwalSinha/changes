import React from 'react';
import backImage from '../../src/images/backtwo.jpg';
import logoImage from '../../src/images/logoimg.png';
import mailLogo from '../../src/images/mail.png';
import passlLogo from '../../src/images/pass.png';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section id="home">
      <div style={{ backgroundImage: `url(${backImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12 pt-1">
            <div className="py-5" style={{ height: "100%", backgroundColor: "rgba(68, 75, 70, 0.56)", borderRadius: "40px" }}>
              <center>
                <h1 style={{ color: "white", paddingBottom: "20px" }}>Let's get started</h1>
              </center>
              <div className="form-group row p-4">
                <label htmlFor="email" className="col-sm-12 col-form-label">
                  <h4 style={{ color: "white" }}>Email</h4>
                </label>
                <div className="col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text"><img src={mailLogo} alt="" /></span>
                    <input type="email" className="form-control" placeholder="Email Address" id="email" required="" />
                    <div className="invalid-feedback">Please enter your email</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-4">
                <label htmlFor="pass" className="col-sm-12 col-form-label">
                  <h4 style={{ color: "white" }}>Password</h4>
                </label>
                <div className="col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text"><img src={passlLogo} alt="" /></span>
                    <input type="password" className="form-control" placeholder="*********" id="pass" required="" />
                    <div className="invalid-feedback">Please enter your password</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <Link to="/m-panel" className="text-light d-block mb-3">
                  <button type="submit" className="btn btn-success btn-rounded w-100 shadow-lg" style={{ borderRadius: "40px", fontSize: "20px" }}><b>Login</b></button>
                </Link>
                <p style={{ color: "white" }}> New user? Click below to Sign Up </p>
                <Link to="/sign-emp" className="text-light d-block">
                  <button type="submit" className="btn btn-info btn-rounded w-100 shadow-lg" style={{ borderRadius: "40px", fontSize: "20px", color: "white" }}><b>Sign Up</b></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 pt-5" style={{ paddingInlineStart: "100px" }}>
            <center> <img src={logoImage} alt="logo" /></center>
          </div>
        </div>
      </div>
    </section>
  );
}
