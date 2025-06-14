import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { alias } from "./src/utils/alias-path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteTsconfigPaths()],
  resolve: {
    alias,
  },
});
