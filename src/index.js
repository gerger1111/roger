// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global CSS file
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
