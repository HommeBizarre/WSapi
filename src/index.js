import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';

import db from "./config/db.js"





const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
reportWebVitals(console.log)
