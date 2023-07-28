/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: "lib/[name].js",
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
