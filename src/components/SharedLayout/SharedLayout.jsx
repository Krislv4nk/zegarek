import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from './../Container/Container';
import CustomClock from './../../components/MyDigitalClock/MyDigitalClock';
import CurrentDate from './../../components/CurrentDate/CurrentDate';
import css from '../SharedLayout/SharedLayout.module.css';
import { Background} from '../../components/Background/Background';


const SharedLayout = () => {

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
    <Background>
    <Container>
      <Suspense fallback={null}>
        <div className={css.mainContainer}>
      <div className={css.container}>
        <CustomClock />
        <CurrentDate/>
        </div>
      <p className={css.created}>Created by Krislv4nk</p>
          </div>
        <Outlet />
        </Suspense>
      </Container>
      </Background>
  );
};

export default SharedLayout;
