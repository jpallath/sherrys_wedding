import React, { Component } from "react";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotron: {
        width: "55px",
        height: "1000px"
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    let newStyle = {
      width: "100px",
      height: "999px"
    };
    this.setState({
      jumbotron: newStyle
    });
  }
  render() {
    let { jumbotron } = this.state;
    return (
      <div style={jumbotron} onScroll={this.handleScroll} className="yep">
        Here is the gallery
      </div>
    );
  }
}

export default Gallery;
