import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import Header from './components/Header';
import Aside from './components/Aside';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Aside />
    
    <Dashboard />
  </React.StrictMode>
);
