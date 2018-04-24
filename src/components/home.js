import React, { Component } from "react";
import jumbotron from "../images/jumbotron.png";
import ring from "../images/ring.jpg";
import "../styles/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronStyle: {
        padding: "0 25vw",
        width: "50vw"
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    let newStyle = {
      width: "25vw",
      padding: "0 40vw"
    };
    this.setState({
      jumbotronStyle: newStyle
    });
  }
  render() {
    let { jumbotronStyle } = this.state;
    return (
      <div className="home">
        <img
          className="jumbotron"
          src={jumbotron}
          alt="greet"
          onScroll={this.handleScroll}
          style={jumbotronStyle}
        />
        <div className="details-greeter">
          <h1>A sweet ending to a new beginning </h1>
          <p>
            May 01, 2017 marks the date when the couple first started texting.
            Texting lead to Calls then Video Chats (the occasional SnapChat)
            then finally the connection was strong enough for Jones to finally
            take a flight out to Newark, New Jersey. Sherry made the 2 hour trip
            from Philadelphia, Pennsylvania to pick up (not knowing at the time)
            her future fiance. The 2 hour trip the couple finally talked side
            face to side face and checking each other out sneakingly. that
            weekend June 9 -11 2017 the couple was themselves for the first time
            but still had the goosebumps every time the other looked at them.
            From June each would be traveling from coast to coast.. July 4,
            2017, we fell in love each other on a phone call. Jones fell deeply
            in love and was ready to lock her down and spend the rest of their
            lives together.
          </p>
          <img src={ring} alt="another one" />
          <h1>He proposed</h1>
        </div>
      </div>
    );
  }
}

export default Home;
