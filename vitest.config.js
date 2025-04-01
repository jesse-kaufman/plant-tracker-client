/** @file Vitest configuration. */
import path from "path"
import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  test: {
    environment: "jsdom",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure this resolves to /src
    },
  },
  plugins: [vue()],
})
