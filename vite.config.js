import { defineConfig } from "vite";
import React from "react";
export default defineConfig({
  plugins: [React()],
  base: process.env.VITE_BASE_PATH || "/",
});
