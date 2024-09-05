import { useEffect } from 'react';
import CustomClock from './../../components/MyDigitalClock/MyDigitalClock';
import css from './FirstPage.module.css';

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

    if ('wakeLock' in navigator) {
      requestWakeLock();
    }

    return () => {
      if (wakeLock) {
        wakeLock.release();
        console.log('Wake lock released on cleanup');
      }
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <h2>First Page</h2>
      <CustomClock />
      <p className={css.created}>Created by Krislv4nk</p>
    </div>
  );
};

export default FirstPage;
