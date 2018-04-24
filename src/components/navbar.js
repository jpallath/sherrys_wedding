import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <li>
          <Link to="/story">Add to Our Story</Link>
        </li>
        <li>
          <Link to="/bridalparty">Bridal Party</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/festivities">Festivities</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registry">Registry</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
      </nav>
    );
  }
}

export default NavBar;
