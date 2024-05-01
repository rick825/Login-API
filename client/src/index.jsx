import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = document.getElementById('root');


createRoot(root).render(
    <>
      <App />
      <ToastContainer />
    </>
  );
