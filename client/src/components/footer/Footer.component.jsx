import React from "react";
import "./Footer.styles.css";
// import AboutPage from "../../pages/about-page/about-page";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <h1>
        <span style={{ color: "grey"}}>Terms&Conditions</span>
      </h1>
      <div className="socialIcons">
        <Link to="https://instagram.com/procaps">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://twitter.com/procaps">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/procaps/">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/procaps">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="/about-us"><h1>About Us </h1></Link>   
      </div><br/>
      <p style={{ color: "grey", textAlign: "center", marginTop: "-50px" , padding:'50px', colorRendering:"red"}}>All Rights Reserved. &copy; 2021 <Link href="#">Procaps</Link>
      </p>
    </footer>
  );
};

export default Footer;