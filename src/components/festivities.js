import React, { Component } from "react";
import "../styles/festivities.css";
import Map from "./mapcomponent.js";

class Festivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      churchLon: -80.252761,
      churchLat: 26.233565,
      hotLon: -80.2851098,
      hotLat: 26.3097357
    };
  }

  render() {
    let { churchLat, churchLon, hotLat, hotLon } = this.state;
    return (
      <div className="festivities">
        <h1>Festivities</h1>
        <div className="place church">
          <div>
            <h3>Ceremony: Our Lady of Health</h3>
            <h4>201 N University Drive Coral Springs, FL 33071</h4>
            <h4>3:00PM</h4>
          </div>
          <Map lon={churchLon} lat={churchLat} />
        </div>
        <div className="place venue">
          <Map lon={hotLon} lat={hotLat} />
          <div>
            <h3>Venue: Fort Lauderdale Marriot Coral Springs</h3>
            <h4>11775 Heron Bay Boulevard Coral Springs Florida 33076</h4>
            <h4>6:00PM</h4>
          </div>
          <div className="acc">
            <h3>
              For your convenience, a preferred rate is available the weekend of
              October 5 to October 7, 2018
            </h3>
            <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Jones%20and%20Painumkal%20Wedding%20Room%20Block%5Efllmc%60jswjswa%60122%60USD%60false%604%6010/5/18%6010/7/18%609/5/18&app=resvlink&stop_mobi=yes">
              Marriot
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Festivities;
