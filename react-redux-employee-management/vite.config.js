import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  server: {
    proxy: {
      '/employees': {
        target: 'http://localhost:8080', // Specify the address of your Spring Boot application
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/employees/, ''), // Optional: Remove the '/employees' prefix
      },
    },
  },
})
