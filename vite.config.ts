import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
        },
      },
    },
  },
  // SEO Optimizations
  define: {
    __SEO_TITLE__: JSON.stringify('Anna-el Gerard RABENANDRASANA - Développeur Full-Stack'),
    __SEO_DESCRIPTION__: JSON.stringify('Portfolio professionnel d\'Anna-el Gerard RABENANDRASANA, développeur Full-Stack spécialisé en React, TypeScript, Node.js.'),
  },
});
