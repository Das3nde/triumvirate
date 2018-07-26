import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Countdown extends Component {
  componentDidMount() {
    const { updateInterval } = this.props;
    this.interval = setInterval(this.forceUpdate.bind(this), updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { endTime } = this.props;
    let t = Math.floor((endTime - Date.now()) / 1000);

    const days = Math.floor(t / (60 * 60 * 24));
    t -= days * (60 * 60 * 24);

    const hours = Math.floor(t / (60 * 60)) % 24;
    t -= hours * (60 * 60);

    const minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;

    const seconds = t % 60;

    return (
      <p>
        {`${days}d ${hours}h ${minutes}m ${seconds}s`}
      </p>
    );
  }
}

Countdown.propTypes = {
  endTime: PropTypes.number.isRequired,
  updateInterval: PropTypes.number.isRequired
};

export default Countdown;
