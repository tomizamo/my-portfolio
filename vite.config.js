import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  base: '/my-portfolio/',

  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Esto es lo que va a obligar a Vite a detectar tus cambios en Windows
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
})