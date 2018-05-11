import React, { Component } from "react";
import "../styles/home.css";
import Countdown from "../components/countdown";

class AddtoOurStory extends Component {
  render() {
    return (
      <div className="home">
        <div className="details-greeter">
          <div className="parallax image-three" />
          <div className="home-text">
            <h1>Our Story</h1>
            <Countdown />
          </div>
          <div className="parallax image-four" />
          <h1 className="hashtag">#Jonesin4Sherry</h1>
        </div>
      </div>
    );
  }
}

export default AddtoOurStory;
