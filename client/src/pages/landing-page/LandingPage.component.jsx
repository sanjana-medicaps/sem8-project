import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "../../images/profile.png";
import Navbar from "../../components/navbar/Navbar.component";
import Footer from "../../components/footer/Footer.component";

import "./LandingPage.styles.css";

const LandingPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <main id="landing">
        <div className="container">
          <div className="columns">
            <div className="column">
            <img src={Profile} alt="college"/>
              
              </div>
              <div className="column">
              <div className="text-container">
                  <h1 className="title">Hello, Medi-Caps Developers!</h1>
                  <p className="subtitle has-text-grey">
                    A portal for Medicaps Developers to showcase their
                    work to all the college members. Like, Share and Follow them.
                  </p>
                  <Link to="/signup" className="button primary-bg">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
