/// <reference types="react" />
/// <reference types="react-dom" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 