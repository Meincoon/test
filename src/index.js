import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './scss/common.scss'
import './scss/w1024px.scss'
import './scss/w320px.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);