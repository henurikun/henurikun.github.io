import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/henurikun.github.io/",
  plugins: [react()],
  server: {
    port: 5500,
  },
});
