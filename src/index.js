// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
    <App />
</React.StrictMode>
);
