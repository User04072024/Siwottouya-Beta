import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes Layout y Páginas - CORREGIDO: Añadido .jsx
import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Home from '@/pages/Home.jsx';
import Products from '@/pages/Products.jsx';
import About from '@/pages/About.jsx';
import Contact from '@/pages/Contact.jsx';

// Contextos y otros componentes - CORREGIDO: Añadido .jsx
import { ThemeProvider } from '@/context/ThemeProvider.jsx';
import { AdminProvider } from '@/context/AdminContext.jsx';
import AdminPanel from '@/components/AdminPanel.jsx';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AdminProvider>
        <div className="min-h-screen flex flex-col bg-accent wayuu-pattern">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <AdminPanel />
        </div>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;


