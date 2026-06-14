import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/src': '/src',
      '@/features': '/src/features',
      '@/app': '/src/app',
      '@/components': '/src/components',
      '@/hooks': '/src/hooks',
      '@/assets': '/src/assets',
      '@/utils': '/src/utils',
    },
  },
});
