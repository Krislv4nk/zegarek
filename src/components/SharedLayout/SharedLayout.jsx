import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Background } from './../Background/Background'


const SharedLayout = () => {
  return (
    <>
      <Background/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
