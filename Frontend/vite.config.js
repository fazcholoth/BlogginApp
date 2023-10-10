import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure the proxy middleware
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Your backend server's address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the '/api' prefix
      },
    },
  },
})
