import './App.scss';
import './styles/partials/_global.scss'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import { useState } from 'react';



function App() {
  
  return (
    <>
        <Header/>
        <Home />
    </>
  )
}

export default App;
