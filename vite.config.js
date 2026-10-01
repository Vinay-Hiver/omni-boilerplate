import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Emit SVGs (and other assets) as files instead of inlining them as
    // data URIs. Inlined SVGs contain single quotes that break CSS
    // `mask: url(...)` in production (icons rendered as solid squares).
    assetsInlineLimit: 0,
  },
})
