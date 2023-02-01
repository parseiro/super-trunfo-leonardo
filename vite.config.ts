import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/super-trunfo-leonardo/',  // nome do repositório no github
  plugins: [react()],
})
