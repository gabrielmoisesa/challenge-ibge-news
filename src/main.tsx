import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalProvider from './context/GlobalProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);
