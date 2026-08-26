import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/HVAC-Services/",
  server: {
    host: true, // Exposes the server to your local network (WiFi)
  },
})


