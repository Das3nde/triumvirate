export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

export const startTimer = (baseTime = 0) => ({
  type: START_TIMER,
  baseTime,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const actions = {
  startTimer,
  stopTimer,
  resetTimer,
};
