import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.jsx'; // Añadido .jsx
import './index.css';
import { Toaster } from "@/ui/toaster.jsx"; // Añadido .jsx
import { CartProvider } from "@/context/CartContext.jsx" // Añadido .jsx
import { DataProvider } from "@/context/DataContext.jsx" // Añadido .jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

