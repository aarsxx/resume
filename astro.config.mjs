import { defineConfig } from 'astro/config';

// Using Vite on Windows Subsystem for Linux (WSL) 2
// https://vitejs.dev/config/server-options.html#server-watch
// Note that usePolling leads to high CPU utilization.
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [vue()]
});