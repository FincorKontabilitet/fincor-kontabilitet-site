
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    netlify(),
    react(),
  ],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}',
    ],
  },
})
