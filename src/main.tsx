import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Agrega el CDN de Bootstrap en el encabezado
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
linkElement.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
linkElement.crossOrigin = 'anonymous';
document.head.appendChild(linkElement);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
