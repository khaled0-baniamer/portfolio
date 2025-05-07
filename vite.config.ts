// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3005,
    host: "0.0.0.0",
  },
  base:"/portfolio/"
});
