import React, { Component } from "react";
import { Link } from "react-router-dom";
import jumbotron from "../images/jumbotron.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronStyle: "default",
      menuStyle: "inactive",
      scroll: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.menuAppear = this.menuAppear.bind(this);
    this.menuDisappear = this.menuDisappear.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  menuAppear(event) {
    this.setState({
      menuStyle: "active"
    });
  }
  menuDisappear(event) {
    this.setState({
      menuStyle: "inactive"
    });
  }
  handleScroll(event) {
    let newStyle = "downscroll";
    let defaultStyle = "upscroll";
    if (window.scrollY > this.state.scroll) {
      this.setState({ scroll: window.scrollY, jumbotronStyle: newStyle });
    } else {
      this.setState({ scroll: window.scrollY, jumbotronStyle: defaultStyle });
    }
  }
  render() {
    let { jumbotronStyle, menuStyle } = this.state;
    let notMenuStyle = "active" === menuStyle ? "inactive" : "active";
    let jumbo = `${notMenuStyle} ${jumbotronStyle} jumbotron`;
    return (
      <nav
        onMouseOver={this.menuAppear}
        onMouseOut={this.menuDisappear}
        className={menuStyle}
      >
        <div id="navbar" className={"active" === menuStyle ? "hi" : "bye"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/RSVP">RSVP</Link>
          </li>
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
            <Link to="/registry">Registry</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
        </div>
        <img
          className={jumbo}
          src={jumbotron}
          alt="greet"
          onScroll={this.handleScroll}
        />
      </nav>
    );
  }
}

export default NavBar;
