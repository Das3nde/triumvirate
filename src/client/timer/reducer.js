import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER
} from './actions';

const initialState = {
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_TIMER: return { ...initialState };
    case START_TIMER:
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: state.stoppedAt ? Date.now() : (state.startedAt || Date.now()),
        stoppedAt: undefined,
      };
    case STOP_TIMER:
      return {
        ...state,
        stoppedAt: state.stoppedAt || Date.now()
      };
    default: return state;
  }
};
