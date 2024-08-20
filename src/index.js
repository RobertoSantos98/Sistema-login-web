import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login/indes';
import GlobalStyle from './Styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);