import React from 'react';
import './about-page.css';
import About_1 from '../../images/about-1.jpg';
import About_2 from '../../images/about-2.jpg';
import Sanjana from '../../images/sanjana.jpg';
import Riya from '../../images/riya.jpg';
function AboutPage(props) {
  return (
    <div className="container">
      <div className="navbar-about">
        Procaps
      </div>
      <div className="first-image">
        <img src={About_1} alt="about-1"/>
        <div className="first-text-container">This is a social media platform for college students and teachers where user can post their projects and ideas. Everyone can see their projects and ideas. </div>
      </div>
      <div className="second-image">
        <div className="second-text-container">Juniors can interact with their seniors, they can ask about projects and they can even see their projects on their profile with a detailed description, so the juniors will also get an idea what kind of projects the university wants from them and which technology they should learn and on what technology they should start working upon.</div>
        <img src={About_2} alt="about-2"/>
      </div>
      <div className="developers-col">
      <hr/>
        <p>Developers</p>
      <hr/>
      <div className="developers-details">
        <div className="developer-1">
        <img className="developer-1-img" src={Sanjana} alt="developer-1"/>
        <div className="developer-1-details">
          <b>Sanjana Gupta</b><br/>Web Developer
        </div>
        </div>
        <div className="developer-2">
        <img className="developer-2-img" src={Riya} alt="developer-2"/>
        <div className="developer-2-details">
          <b>Riya Mishra</b><br/>Web Developer
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutPage;