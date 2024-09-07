import { useState, useEffect } from 'react';
import css from './CurrentDate.module.css';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('pl-PL', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <h2 className={css.currentDate}> {currentDate}</h2>
    </div>
  );
};

export default CurrentDate;