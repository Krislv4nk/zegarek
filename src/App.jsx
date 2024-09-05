import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';




function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
  
  );
}
export default App;
