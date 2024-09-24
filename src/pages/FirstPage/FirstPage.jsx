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
      <h2 className={css.header}>Trick or treat, kurwa mać!</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 6c.97 0 1.87.5 2.61 1.38c.55-.59 1.2-1.02 1.89-1.23V4a2 2 0 0 1 2-2h2v2h-2v2.15c.69.21 1.34.64 1.89 1.23C15.63 6.5 16.53 6 17.5 6C20 6 22 9.36 22 13.5S20 21 17.5 21c-.97 0-1.87-.5-2.61-1.38C14.08 20.5 13.08 21 12 21s-2.08-.5-2.89-1.38C8.37 20.5 7.47 21 6.5 21C4 21 2 17.64 2 13.5S4 6 6.5 6M9 10l-1.25 2.25h2.5zm6 0l-1.25 2.25h2.5zm-7 7h2l1-1l1 1h2l1-1l1 1l1.5-3l-3.58.62L13 16l-1-1h-2l-1 1l-1-1l-2-1z"/></svg>
      {/* <img className={css.drewnex} src={drewnex} alt="myPhoto" /> */}
      <CurrentDate/>
      <CustomClock />
      <p className={css.created}>Created by Krislv4nk</p>
      
    </div>
  );
};

export default FirstPage;
