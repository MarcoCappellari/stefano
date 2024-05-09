import React from 'react';
import { createRoot } from 'react-dom/client'; // Modifica qui l'import
import './index.css';
import App from './App';


const root = createRoot(document.getElementById('root')); // Usa createRoot
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
