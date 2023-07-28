/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: "web-components/[name].js",
        assetFileNames: `web-components/[name].[ext]`,
      },
    },
  },
});
