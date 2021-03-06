import React, { Component } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Countdown from "../components/countdown";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="details-greeter">
          <div className="parallax image-one" />
          <div className="home-text">
            <h1>Welcome</h1>
            <p>
              Thank you for all your love, support and prayers throughout our
              adventure together from day one. We are thrilled to share the
              details of our coming wedding with you. Please check back
              frequently for updates regarding our destination wedding!{" "}
              <Link to="/rsvp">RSVP</Link>
            </p>
            <Countdown />
          </div>
          <div className="parallax image-two" />
          <h1 className="hashtag">#Jonesin4Sherry</h1>
        </div>
      </div>
    );
  }
}

export default Home;
