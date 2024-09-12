import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './stores/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <CartProvider>
    <App/>
   </CartProvider>
  </Router>
);
