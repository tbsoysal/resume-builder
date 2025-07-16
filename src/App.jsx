import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./styles/global.scss";
import LandingPage from "@/pages/landing/LandingPage";
import CreationPage from "@/pages/create/CreationPage";
import TemplatesPage from "@/pages/template/TemplatesPage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<CreationPage />}></Route>
        <Route path='/template' element={<TemplatesPage />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
