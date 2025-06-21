// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ SEO support

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ Enables dynamic <head> changes */}
      <BrowserRouter> {/* ✅ Enables routing */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
