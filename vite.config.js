import { defineConfig } from 'vite';
import { app as expressApp } from './server/index.js';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: true
  },
  plugins: [
    {
      name: 'express-backend-plugin',
      configureServer(server) {
        // Mount Express app directly to handle /api requests within Vite dev server
        server.middlewares.use(expressApp);
      }
    }
  ]
});
