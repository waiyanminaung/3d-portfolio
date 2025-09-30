import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/layouts": "/src/components/layouts",
      "@/3d": "/src/components/3d",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
