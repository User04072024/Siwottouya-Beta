import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // SOLUCIÓN: Añadir la ruta base de tu repositorio
  base: '/Siwottouya-Beta/', 
  
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})



