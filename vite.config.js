import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reducePluginSystem from 'vite-plugin-reduce-plugin-system'
// import { microWebPlugin } from '@micro-web/vite-plugin';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/pdf/',
  plugins: [react(), /*microWebPlugin()*/, reducePluginSystem({
    mode: 'development'
  })],
  server: {
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin'
    },
    port: 6001
  }
})
