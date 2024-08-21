import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState('');
  const [countdown, setCountdown] = useState({});
  
  useEffect(() => {
    let timer;
    if (targetDate) {
      timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        if (distance < 0) {
          clearInterval(timer);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          setCountdown({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          });
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleChange = (e) => {
    setTargetDate(e.target.value);
  };

  return (
    <div className="countdown-timer">
      <h1>GitHub Pages App</h1>
      <h1>Countdown Timer</h1>
      <input
        type="datetime-local"
        onChange={handleChange}
        value={targetDate}
      />
      <div className="countdown">
        <div className="time-block">
          <span className="time">{countdown.days || 0}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.hours || 0}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.minutes || 0}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.seconds || 0}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
