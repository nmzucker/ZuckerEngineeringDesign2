import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/ZuckerEngineeringDesign2/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
      },
    },
  },
});
