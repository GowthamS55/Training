import React, { useReducer, useEffect } from "react";
import { stopwatchReducer, initialState } from "./stopwatchReducer";

const Stopwatch = () => {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);

  // useEffect(() => {
  //   let timer;
  //   if (state.running) {
  //     timer = setInterval(() => {
  //       dispatch({ type: "TICK" });
  //     }, 1000);
  //   }
  //   return () => clearInterval(timer);
  // }, [state.running]);

  useEffect (() => {
    let timer;
    if(state.running) {
      timer = setInterval(() =>{
        dispatch({type :"TICK"})
      },1000);
    }
    return () => clearInterval(timer);
  },[state.running])

  return (
    <div>
      <h2>⏱ Stopwatch</h2>
        <h1>{state.time} seconds</h1>
        <button onClick={() => dispatch({ type: "START" })} disabled={state.running}>
          ▶ Start
        </button>
        <button onClick={() => dispatch({ type: "PAUSE" })} disabled={!state.running}>
        ⏸ Pause
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔄 Reset</button>
    </div>
  );
};

export default Stopwatch;
