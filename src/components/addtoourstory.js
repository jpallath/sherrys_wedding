import React, { Component } from "react";
import beach from "../images/beach.jpg";

class AddToOurStory extends Component {
  render() {
    return (
      <div className="story">
        <img src={beach} alt="beach" />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSeZuNQga4h8_RHltlpy2W1qa5Iblg6nZ5dR0kAIV0ESuNy7SQ/formResponse"
          target="_self"
          method="POST"
          id="mG61Hd"
        >
          <p>
            <label htmlFor="entry.1809360048">Name</label>
            <input type="text" name="entry.1809360048" />
          </p>
          <p>
            <label htmlFor="entry.850359638">Are you attending?</label>
            <input type="text" name="entry.850359638" />
          </p>
          <p>
            <label htmlFor="entry.2037305380">
              How many people are you bringing?
            </label>
            <input type="text" name="entry.2037305380" />
          </p>
          <p>
            <label htmlFor="entry.1155699208">Comments</label>
            <input type="text" name="entry.1155699208" />
          </p>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddToOurStory;
