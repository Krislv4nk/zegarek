import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Background } from './../Background/Background';
import { Container } from './../Container/Container';

const SharedLayout = () => {
  return (
    <Container>
      <Background/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
