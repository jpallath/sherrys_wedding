import React, { Component } from "react";
import Map from "./mapcomponent";

class SingleEvent extends Component {
  componentDidUpdate() {
    console.log(this.props.activeEvent.Lon);
    console.log(this.refs.mapped);
  }
  render() {
    let {
      situation,
      time,
      day,
      date,
      address0,
      address1,
      address2,
      // venue,
      Lon,
      Lat,
      extra,
      link
    } = this.props.activeEvent;
    return (
      <div className="single-event">
        <div className="calendar-container">
          <h4>{day}</h4>
          <h4>{date}</h4>
          <h4> {time} </h4>
        </div>
        <div className="details">
          <div className="ceremony-container">
            <div className="ceremony-words">
              <h1>{situation}</h1>
              <h2>{address0}</h2>
              <h3>{address1}</h3>
              <h3>{address2}</h3>
              {extra ? (
                <p>
                  {extra} <a href={link}>which you can find here</a>
                </p>
              ) : null}
            </div>
            {isNaN(Lon) && isNaN(Lat) ? null : (
              <Map ref="mapped" lon={Lon} lat={Lat} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
