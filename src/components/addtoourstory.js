import React, { Component } from "react";
import "../styles/home.css";

class AddtoOurStory extends Component {
  render() {
    console.log("hi");
    return (
      <div className="home">
        <div className="details-greeter">
          <div className="parallax image-three" />
          <div className="home-text">
            <h1>Our Story</h1>
            <p>
              May 01, 2017 marks the date when the couple first started texting.
              Texting lead to calls then video calls (the occasional snapchat)
              then finally the connection was strong enough for jones to finally
              take a flight out to Newark, New Jersey. Sherry made the 2 hour
              trip from Philadelphia, Pennsylvania to pick up (not knowing at
              the time) her future fiancé. The 2-hour trip the couple finally
              talked while sneakily checking each other out with side glances
              That weekend June 9 -11 2017 the couple was themselves for the
              first time but still had the goosebumps every time the other
              looked at them. From June each would be traveling from coast to
              coast.. July 4, 2017, we fell in love each other on a phone call.
              Jones fell deeply in love and was ready to lock her down and spend
              the rest of their lives together.
            </p>
          </div>
          <div className="parallax image-four" />
          <h1 className="hashtag">#Jonesin4Sherry</h1>
        </div>
      </div>
    );
  }
}

export default AddtoOurStory;
