/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
