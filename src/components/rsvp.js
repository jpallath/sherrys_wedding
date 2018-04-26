import React, { Component } from "react";
import "../styles/rsvp.css";
class RSVP extends Component {
  render() {
    return (
      <div className="rsvp">
        <div className="parallax image-rsvp" />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSeZuNQga4h8_RHltlpy2W1qa5Iblg6nZ5dR0kAIV0ESuNy7SQ/formResponse"
          target="_self"
          method="POST"
          id="mG61Hd"
          className="rsvp-form"
        >
          <p>
            Share in Sherry and Jones' story. Fill this out so we know if you're
            attending!
          </p>
          <p>
            <input type="text" name="entry.1809360048" />
            <label className="sibling" htmlFor="entry.1809360048">
              Name
            </label>
          </p>
          <p>
            <input type="text" name="entry.850359638" />
            <label className="sibling" htmlFor="entry.850359638">
              Email
            </label>
          </p>
          <p>
            <input type="text" name="entry.2037305380" />
            <label className="sibling" htmlFor="entry.2037305380">
              How many people are you bringing?
            </label>
          </p>
          <p>
            <input type="text" name="entry.1155699208" />
            <label className="sibling" htmlFor="entry.1155699208">
              Comments
            </label>
          </p>
          <input type="submit" value="See you soon" />
        </form>
      </div>
    );
  }
}

export default RSVP;
