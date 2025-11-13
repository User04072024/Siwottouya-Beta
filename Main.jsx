import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartContext';
import { DataProvider } from '@/context/DataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  </>
);