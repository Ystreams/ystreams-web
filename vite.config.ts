import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [
          react(),

          Sitemap({
               hostname: "https://ystreams.co",
          }),
     ],
     server: {
          host: "0.0.0.0", // Allow access from any IP address in the local network (e.g: your phone)
          port: 5173,
     },
});
