import React, { Suspense, useEffect } from 'react';
import { useLocation, HashRouter, Routes, Route } from 'react-router-dom';
import "./styles/global.scss";

const LandingPage = React.lazy(() => import('@/pages/landing/LandingPage'));
const CreationPage = React.lazy(() => import('@/pages/create/CreationPage'));
const TemplatesPage = React.lazy(() => import('@/pages/template/TemplatesPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/create' element={<CreationPage />}></Route>
          <Route path='/template' element={<TemplatesPage />}></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
