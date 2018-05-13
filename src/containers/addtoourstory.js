import React, { Component } from "react";
import "../styles/story.css";
import Countdown from "../components/countdown";
import storyOne from "../images/storyone.JPG";

class AddtoOurStory extends Component {
  render() {
    return (
      <div className="story">
        <div className="container story">
          <div className="distance">2,822 miles</div>
          <div className="image">
            <img src={storyOne} alt="first" />
          </div>
          <p>
            May 01, 2017 marks the date when the couple first started texting.
            Texting lead to calls then video calls (the occasional snapchat)
            then finally the connection was strong enough for Jones to finally
            take a flight out to Newark, New Jersey. Sherry made the 2 hour trip
            from Philadelphia, Pennsylvania to pick up (not knowing at the time)
            her future fiancé. The 2-hour trip the couple finally talked side
            face to side face and checking each other out sneakingly. That
            weekend June 9 -11 2017 the couple was themselves for the first time
            but still had the goosebumps every time the other looked at them.
            From June each would be traveling from coast to coast.. July 4,
            2017, we fell in love each other on a phone call. Jones fell deeply
            in love and was ready to lock her down and spend the rest of their
            lives together.
          </p>
        </div>
        <h1 className="hashtag">#Jonesin4Sherry</h1>
      </div>
    );
  }
}

export default AddtoOurStory;
