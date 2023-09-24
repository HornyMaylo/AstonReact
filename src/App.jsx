import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { AppWrapper } from './components/AppWrapper/AppWrapper';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
