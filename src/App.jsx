import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { AppWrapper } from './components/AppWrapper/AppWrapper';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapper />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
