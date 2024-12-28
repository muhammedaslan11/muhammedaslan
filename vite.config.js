import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8001,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      '@public': path.resolve(__dirname, './public'),
      '@global': path.resolve(__dirname, './src/components/global'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
