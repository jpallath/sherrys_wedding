import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    const google = window.google;
    let gMap = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      map: gMap,
      title: "Hello World!"
    });
  }
  componentDidUpdate() {
    const google = window.google;
    let gMap = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      map: gMap,
      title: "Hello World!"
    });
  }
  render() {
    return <div className="mapped" ref="map" />;
  }
}

export default Map;
