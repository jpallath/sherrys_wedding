import React, { Component } from "react";

class EventContainer extends Component {
  changeEvent = id => {
    this.props.changeEvent(id);
  };
  render() {
    let events = this.props.events.map(event => (
      <li key={event.id} onClick={() => this.changeEvent(event.id)}>
        {event.situation}
      </li>
    ));
    return <ul className="event-container">{events}</ul>;
  }
}

export default EventContainer;
