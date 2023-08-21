import React, { useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Timeline.css";

export default function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <>
      <div className="events">
      <div className="head">
        <div className="distortedshape"></div>
      <h1 className="mainheading">Timeline</h1>
      <h3 className="subheading">Mark the Dates to set yourself on fire</h3>
      </div>
        <div className="timeline">
          <div className="container-event left-container">
            
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Registration</h2>
                <small>6 August - 27 August</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Orientation</h2>
                <small>2 September (6pm)</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="container-event left-container">
           
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Speaker Sessions</h2>
                <small>3 September</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Round 1 Idea Presentation</h2>
                <small>4-5 September</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event left-container">
            
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Round 1 Results</h2>
                <small>7th September</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Round 2 Coding Phase (36hr)</h2>
                <small>8 September - 9 September</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event left-container">
            
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Final Pitches to judges</h2>
                <small>10 September</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Final Result</h2>
                <small>12 September</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
