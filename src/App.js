import './App.scss';
import './styles/partials/_global.scss'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {

  
  return (
    /*<>
        <Header/>
        <Home />
        <Route path="/" element={<Home setFirstVid={setFirstVid}/>} />
        <Route path="/" element={<Navigate to={firstVid} />} />
    </>*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path=":vidID" element={<Home/>} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
