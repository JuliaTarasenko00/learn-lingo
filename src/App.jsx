import { Loader } from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const Teachers = lazy(() => import('./page/Teachers/Teachers'));
const Favorite = lazy(() => import('./page/Favorite/Favorite'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
