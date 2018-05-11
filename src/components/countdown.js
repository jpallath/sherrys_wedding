import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: new Date("Oct 6, 2018 03:00:00").getTime(),
      now: new Date().getTime(),
      leftover: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.timer = this.timer.bind(this);
    this.convert = this.convert.bind(this);
  }

  componentDidMount() {
    this.initialLeftover = this.state.destination - this.state.now;
    this.setState({ leftover: this.initialLeftover });
    this.time = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  timer = () => {
    let value = this.state.leftover - 1000;
    this.convert(value);
    this.setState({ leftover: value });
  };

  convert = value => {
    let days = value / 86400000;
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;
    days = Math.floor(days);
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  };

  render() {
    let { days, hours, minutes, seconds } = this.state;
    return (
      <div className="timer">
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
      </div>
    );
  }
}

export default Countdown;
