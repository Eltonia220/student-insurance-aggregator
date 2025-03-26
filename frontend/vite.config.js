import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/student-insurance-aggregator/', // Must match Vercel subpath
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Disable sourcemaps in production for smaller builds
    sourcemap: process.env.NODE_ENV !== 'production'
  }
});