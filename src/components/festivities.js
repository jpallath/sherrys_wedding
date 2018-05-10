import React, { Component } from "react";
import "../styles/festivities.css";
import EventContainer from "./eventcontainer";
import SingleEvent from "./singleevent";

class Festivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: {
        id: 0,
        situation: "Ceremony",
        time: "3:00PM",
        day: "Saturday",
        date: "October 6, 2018",
        address0: "Our Lady of Health",
        address1: "201 North University Drive",
        address2: "Coral Springs, FL 33071",
        venue: "http://syromalabarflorida.org/img/banner2.jpg",
        Lon: -80.252761,
        Lat: 26.233565
      },
      events: [
        {
          id: 0,
          situation: "Ceremony",
          time: "3:00PM",
          day: "Saturday",
          date: "October 6, 2018",
          address0: "Our Lady of Health",
          address1: "201 North University Drive",
          address2: "Coral Springs, FL 33071",
          venue: "http://syromalabarflorida.org/img/banner2.jpg",
          Lon: -80.252761,
          Lat: 26.233565
        },
        {
          id: 1,
          situation: "Reception",
          time: "6:00PM",
          day: "Saturday",
          date: "October 6, 2018",
          address0: "Ft. Lauderdale Marriott Coral Springs",
          address1: "11775 Heron Bay Boulevard",
          address2: "Coral Springs, FL 33076",
          venue:
            "https://images.elitemeetings.com/000317/fort-lauderdale-marriott-coral-springs-hotel-golf-club-and-convention-center_meetings_a.jpg",
          Lon: -80.2851098,
          Lat: 26.3097357
        },
        {
          id: 3,
          situation: "Hotel Reservations",
          time: "",
          day: "Saturday",
          date: "October 5, 2018 - October 7, 2018",
          address0: "Ft. Lauderdale Marriott Coral Springs",
          address1: "11775 Heron Bay Boulevard",
          address2: "Coral Springs, FL 33076",
          venue:
            "https://images.elitemeetings.com/000317/fort-lauderdale-marriott-coral-springs-hotel-golf-club-and-convention-center_meetings_a.jpg",
          Lon: -80.2851098,
          Lat: 26.3097357,
          extra:
            "For your convenience, a preferred rate is available the weekend of  10/05/2018 – 10/07/2018, ",
          link:
            "http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Jones%20and%20Painumkal%20Wedding%20Room%20Block%5Efllmc%60jswjswa%60122%60USD%60false%604%6010/5/18%6010/7/18%609/5/18&app=resvlink&stop_mobi=yes"
        }
      ]
    };
    this.changeEvent = this.changeEvent.bind(this);
  }

  changeEvent = id => {
    let foundId = this.state.events.filter(event => event.id === id);
    this.setState({ activeEvent: foundId[0] });
  };

  render() {
    return (
      <div className="festivities">
        <EventContainer
          events={this.state.events}
          changeEvent={this.changeEvent.bind(this)}
        />
        <SingleEvent activeEvent={this.state.activeEvent} />
      </div>
    );
  }
}

export default Festivities;
