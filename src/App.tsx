import Home from 'pages/Home';
import Landing from 'pages/Landing';
import Portal from 'pages/Portal';
import PressRelease from 'pages/PressRelease';
import type { ReactElement } from 'react';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function BasicLayout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App(): ReactElement {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path='press-release' element={<PressRelease />} />
          <Route path='portal' element={<Portal />} />
          <Route path='landing' element={<Landing />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
