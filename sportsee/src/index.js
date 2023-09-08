import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
// import Header from './components/Header';
// import Aside from './components/Aside';
import Dashboard from './components/Dashboard';
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      {/* <Aside /> */}
      <Routes>
        <Route path="/:idUser" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
