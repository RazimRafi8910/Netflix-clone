import React from "react";
import { Button,Container } from "react-bootstrap";
import "./Banner.css";

function Banner() {
  return (
      <div className="navbar">
      <Container>
        
        <nav className="d-flex justify-content-between mx-3 w-100 pt-4">
          <div className="header">
            <h1 className="header-title">Netflix</h1>
          </div>
          <div>
            <Button className="lanButton" variant="secondary">
              English
            </Button>
            <Button className="signButton">Sign In</Button>
          </div>
        </nav>
        </Container>

        <div className="banner">
          <div className="tittle text-center">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className="inputBox">
              <input className="emailInput" type="text" placeholder="Email" />
              <button className="signBtn" type="button">
                <h2>Get Started </h2>
              </button>
            </div>
          </div>
      </div>
      </div>
  );
}

export default Banner;
