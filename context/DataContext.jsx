import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const initialData = {
  products: {
    mochilas: [
      { id: 1, name: 'Mochila Kanasü', price: 150, description: 'Tejido tradicional con figuras geométricas que representan el entorno.', image: 'mochila wayuu con patrones geometricos', category: 'mochilas', artisan: 'María Pushaina' },
      { id: 2, name: 'Mochila A\'lakajaa', price: 180, description: 'Diseño complejo de dos hilos, mayor durabilidad y detalle.', image: 'mochila wayuu colorida de dos hilos', category: 'mochilas', artisan: 'Ana Epiayú' },
      { id: 3, name: 'Mochila Susu', price: 120, description: 'Mochila pequeña para el día a día, con colores vibrantes.', image: 'mochila wayuu pequeña y vibrante', category: 'mochilas', artisan: 'María Pushaina' },
    ],
    manillas: [
      { id: 4, name: 'Manilla de Protección', price: 20, description: 'Tejida con símbolos de protección y buena suerte.', image: 'manilla wayuu con simbolos', category: 'manillas', artisan: 'Ana Epiayú' },
      { id: 5, name: 'Manilla Floral', price: 25, description: 'Diseño inspirado en la flora del desierto de La Guajira.', image: 'manilla wayuu con diseño de flores', category: 'manillas', artisan: 'María Pushaina' },
    ],
    chinchorros: [
      { id: 6, name: 'Chinchorro O\'ula', price: 500, description: 'Hamaca de tejido abierto, fresca y espaciosa.', image: 'hamaca wayuu de tejido abierto', category: 'chinchorros', artisan: 'José Uriana' },
      { id: 7, name: 'Chinchorro Süi', price: 650, description: 'Hamaca de tejido denso con flecos decorativos.', image: 'hamaca wayuu densa con flecos', category: 'chinchorros', artisan: 'José Uriana' },
    ],
    monederos: [
      { id: 8, name: 'Monedero Tula', price: 35, description: 'Pequeño y práctico, con cierre de cordón.', image: 'monedero wayuu con cordon', category: 'monederos', artisan: 'Ana Epiayú' },
    ],
  },
  artisans: [
    {
      name: 'María Pushaina',
      community: 'Comunidad Guaimarito',
      role: 'Maestra Artesana',
      description: 'Teje desde los 12 años, inspirada en los sueños de su abuela.',
      bio: 'María es una de las tejedoras más respetadas de su comunidad. Sus diseños a menudo representan la fauna y la flora del desierto de La Guajira. Cada mochila que crea no es solo un objeto, sino una historia contada a través de hilos y colores, un legado que pasa de generación en generación.',
      image: 'artesana wayuu sonriendo'
    },
    {
      name: 'José Uriana',
      community: 'Comunidad Uribia',
      role: 'Tejedor de Chinchorros',
      description: 'Especialista en los tejidos más complejos para chinchorros.',
      bio: 'José aprendió el arte del tejido de su madre y ha perfeccionado la técnica del chinchorro, una hamaca tradicional Wayuu. Su trabajo es conocido por su durabilidad y la complejidad de sus patrones geométricos, que simbolizan el universo y la conexión espiritual del pueblo Wayuu.',
      image: 'hombre wayuu tejiendo'
    },
    {
      name: 'Ana Epiayú',
      community: 'Comunidad Manaure',
      role: 'Joven Promesa',
      description: 'Innovando con colores vibrantes y diseños modernos.',
      bio: 'Ana representa la nueva generación de artesanos Wayuu. Combina las técnicas tradicionales con una paleta de colores contemporánea, atrayendo a un público más joven. Su sueño es llevar el arte Wayuu a las pasarelas de moda internacionales, demostrando que la tradición puede ser moderna.',
      image: 'joven artesana wayuu'
    }
  ],
  categories: [
    { id: 'mochilas', name: 'Mochilas', emoji: '👜' },
    { id: 'manillas', name: 'Manillas', emoji: '🎀' },
    { id: 'chinchorros', name: 'Chinchorros', emoji: '🧶' },
    { id: 'monederos', name: 'Monederos', emoji: '👛' },
  ],
};

export const DataProvider = ({ children }) => {
  // En una implementación futura con Supabase, estos datos vendrían de la base de datos.
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};