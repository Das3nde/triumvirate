import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions } from './actions';

class Timer extends Component {
  componentDidMount() {
    const { updateInterval } = this.props;
    this.interval = setInterval(this.forceUpdate.bind(this), updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      baseTime,
      startedAt,
      stoppedAt = Date.now(),
      startTimer,
      stopTimer,
      resetTimer,
    } = this.props;

    const elapsed = startedAt ? (stoppedAt - startedAt + baseTime) : 0;

    return (
      <div>
        <div>
          {`Time: ${elapsed}`}
        </div>
        <div>
          <button type="button" onClick={() => startTimer(elapsed)}>
            Start
          </button>
          <button type="button" onClick={() => stopTimer()}>
            Stop
          </button>
          <button type="button" onClick={() => resetTimer()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  baseTime: PropTypes.number,
  startedAt: PropTypes.number,
  stoppedAt: PropTypes.number,
  updateInterval: PropTypes.number.isRequired,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
  resetTimer: PropTypes.func,
};

Timer.defaultProps = {
  ...actions,
  baseTime: 0,
  startedAt: undefined,
  stoppedAt: undefined,
};

const mapStateToProps = ({ baseTime, startedAt, stoppedAt }) => ({
  baseTime,
  startedAt,
  stoppedAt
});

export default connect(mapStateToProps, actions)(Timer);
