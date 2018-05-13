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
          <div className="storytime">
            <p>
              <span> May, 01, 2017 </span> marks the moment when the first text
              was sent. When things feel right, texting evolves into SnapChats,
              which then turns phone calls, and then into video chats, until
              ultimately seeing each other face to face, no barriers.
            </p>
            <p>
              <span> Jones </span> finally took a flight out to Newark, New
              Jersey. <span>Sherry</span> made the 2 hour drive from
              Philadelphia to meet her [potential] fiancé. That first car trip
              back to Philadelphia was the first time for both to really get to
              know each other face to face (or well, side of the face to side of
              the face)…and subtly check the other one out, too.
            </p>

            <p>
              <span>That weekend, June 2017, </span> the two felt like
              themselves around the other— but they still had goosebumps
              whenever the other looked at them. Since that weekend, each of
              them would travel to the other side of the country, coast to
              coast.
            </p>

            <p>
              <span>July 4, 2017,</span> we fell for each during a phone call.
              Jones fell deeply in love and was ready to lock her down and put a
              💍 on it , and spend the rest of their lives together.
            </p>
          </div>
        </div>
        <h1 className="hashtag">#Jonesin4Sherry</h1>
      </div>
    );
  }
}

export default AddtoOurStory;
