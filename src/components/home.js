import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="details-greeter">
          <div className="parallax image-one" />
          <div className="home-text">
            <h1>#Jonesin4Sherry </h1>
            <p>
              Thank you for all your love, support and prayers throughout our
              adventure together from day one. We are thrilled to share the
              details of our coming wedding with you. Please check back
              frequently for updates regarding our destination wedding!
            </p>
          </div>
          <div className="parallax image-two" />
          <h1>#Jonesin4Sherry</h1>
        </div>
      </div>
    );
  }
}

export default Home;
