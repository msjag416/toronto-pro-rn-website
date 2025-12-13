import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This prevents the build from failing if there are small chunk size warnings
    chunkSizeWarningLimit: 1600,
  }
})
