/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
