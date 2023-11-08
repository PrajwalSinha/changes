import React from 'react';
import aboutImg from '../../src/images/aboutimg.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <img src={aboutImg} alt="" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="col-lg-6 col-md-6 bg-white p-5">
          <h1 style={{ color: 'black', fontSize: '40px', paddingTop: '40px', fontFamily: 'cursive' }}>
            Welcome to Minute Mentor
          </h1>
          <p style={{ color: 'black', fontSize: '18px', paddingTop: '28px' }}>
            This is an employee time tracking and attendance management application.
          </p>
          <p style={{ color: 'black', fontSize: '18px' }}>
            It is an effective application that will automate and streamline the tracking of employee work hours, attendance, and related data to enhance workforce management and ensure compliance.
          </p>
          <p style={{ color: 'black', fontSize: '18px' }}>
            We can login as an employee and keep track of our own working time, apply for leave, track our work progress, etc.
          </p>
          <p style={{ color: 'black', fontSize: '18px', paddingBottom: '66px' }}>
            When logged in as admin, one can view the list of employees and check the attendance and work hours of individual employees. We can also compare the work hours of various employees and approve leave requests of employees if applied.
          </p>
        </div>
      </div>
    </section>
  );
}
