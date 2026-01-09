import React, { use, useCallback, useEffect } from "react";
import { useState, useRef } from "react";
import "./timer.css";
export const Timer = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  let intervalRef = useRef(null);
  const startTimerRef = useRef(null);
  useEffect(() => {
    startTimerRef.current = startTimer;
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  /**
   *
   * @returns
   */
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => setCount((prev) => prev + 1), 1000);
  }, []);
  useEffect(() => {
    console.log(startTimerRef.current == startTimer);
    return () => {
      startTimerRef.current = startTimer;
    };
  }, [name]);
  /**
   *
   */
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  /**
   *
   */
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };
  useEffect(()=>{
   console.log("redneered") 
  })
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Number is {number}</p>
      {/* Batching updates in react */}
      <button
        onClick={() => {

        //   setNumber((prev) => prev + 1);
        //   setNumber((prev) => prev + 1);
            setNumber(number+1);
          setNumber(number+1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
