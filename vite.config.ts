import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 base: "/",
 plugins: [
    react(),
    VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Our Routine',
          short_name: 'OurRoutine',
          description: 'Help your kiddo',
          theme_color: '#ffffff',
          background_color: '#3b003d',
          display: 'fullscreen',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/icons/routine.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icons/routine.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
 ],
 preview: {
  port: 8081,
  strictPort: true,
 },
 server: {
  port: 8082,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8082",
 },
});