import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthObserver } from './store/authObserver'
import App from './App';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthObserver>
      <App />
    </AuthObserver>
  </Provider>
);
