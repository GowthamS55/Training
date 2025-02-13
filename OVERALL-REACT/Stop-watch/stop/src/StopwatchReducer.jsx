export const initialState = { time: 0, running: false };

export const stopwatchReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, running: true };
    case "PAUSE":
      return { ...state, running: false };
    case "RESET":
      return { time: 0 };
    case "TICK":
      return state.running ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
};
