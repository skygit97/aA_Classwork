import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    return (
      setInterval(tick, 1000)
    )
  }, [time])

  const tick = () => {
    setTime(new Date());
  }

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="clock-container">
      <h1>Clock</h1>
      <div className="clock">
        <p>
          <span>Time:</span>
          <span>
            {hours}:{minutes}:{seconds} PDT
						</span>
        </p>
        <p>
          <span>Date:</span>
          <span>{time.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}