/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
  },
  root: "src",
  test: {
    environment: "jsdom",
    // ...
  },
});
