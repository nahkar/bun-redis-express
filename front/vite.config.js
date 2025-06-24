import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    host:  "0.0.0.0" , // Replace with your actual IP address
    strictPort: true, // Ensures that the server will not start if the port is
    },
})
