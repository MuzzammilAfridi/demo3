import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <HashRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </HashRouter>
)
