import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reducePluginSystem from 'vite-plugin-reduce-plugin-system'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reducePluginSystem()],
})
