import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard modeDataGet={true} />
  </React.StrictMode>
);
