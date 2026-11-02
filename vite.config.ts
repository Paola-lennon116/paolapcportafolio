import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/paolapcportafolio/', // ¡Importante! El nombre exacto de tu repositorio entre barras
  plugins: [react(), tailwindcss()],
})
