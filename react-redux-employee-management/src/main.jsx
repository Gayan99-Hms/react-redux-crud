import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

