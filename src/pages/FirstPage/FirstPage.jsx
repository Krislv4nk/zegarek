import { useEffect } from 'react';
import CustomClock from './../../components/MyDigitalClock/MyDigitalClock';
import css from './FirstPage.module.css';
import CurrentDate from './../../components/CurrentDate/CurrentDate';
// import drewnex from './../../helpers/drewnex.jpg';




const FirstPage = () => {

    useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
          console.log('Wake lock was released');
        });
        console.log('Wake lock is active');
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock(); 
      } else if (wakeLock) {
        wakeLock.release(); 
        console.log('Wake lock released because page is not visible');
      }
    };

    if ('wakeLock' in navigator) {
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    }

    return () => {
      if (wakeLock) {
        wakeLock.release();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <CurrentDate/>
      <CustomClock />
      <p className={css.created}>Created by Krislv4nk</p>
    </div>
  );
};

export default FirstPage;
