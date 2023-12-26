import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const Teachers = lazy(() => import('./page/Teachers/Teachers'));
const Favorite = lazy(() => import('./page/Favorite/Favorite'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<Teachers />} />
            <Route
              path="favorite"
              element={
                <PrivateRoute>
                  <Favorite />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
