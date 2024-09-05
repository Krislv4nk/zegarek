

import { useState, useEffect } from 'react';
import css from './MyDigitalClock.module.css';

const CustomClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className={css.watch}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default CustomClock;