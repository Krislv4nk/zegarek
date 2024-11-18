import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './../Container/Container';
import { Background } from '../../components/Background/Background';

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
