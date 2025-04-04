// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setupTests.ts"],
    globals: true,
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});
