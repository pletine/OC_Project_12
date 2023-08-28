import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import Dashboard from './components/Dashboard';

const donnees = {
  numbers: [0, 1, 2, 3, 4]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard data={donnees} />
  </React.StrictMode>
);
