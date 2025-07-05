import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./styles/global.scss";
import LandingPage from "@/pages/landing/LandingPage";
import CreationPage from "@/pages/create/CreationPage";
import TemplatesPage from "@/pages/template/TemplatesPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<CreationPage />}></Route>
        <Route path='/template' element={<TemplatesPage />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
