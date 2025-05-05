import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "styles/global.scss";
import LandingPage from "pages/LandingPage";
import CreationPage from "pages/CreationPage.jsx";
import TemplatesPage from "pages/TemplatesPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<CreationPage />}></Route>
        <Route path='/templates' element={<TemplatesPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
