import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import { ThemeProvider } from '@/context/ThemeProvider';
import { AdminProvider } from '@/context/AdminContext';
import AdminPanel from '@/components/AdminPanel';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AdminProvider>
        <div className="min-h-screen flex flex-col bg-accent wayuu-pattern">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <AdminPanel />
        </div>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
