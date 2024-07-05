import Mdx from "@mdx-js/rollup";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import UnpluginFonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import TsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeFilePrefix: "+",
      experimental: {
        enableCodeSplitting: true,
      },
    }),
    UnpluginFonts({
      google: {
        families: [
          {
            name: "Caveat",
            styles: "wght@400..700",
          },
          {
            name: "Inter",
            styles: "ital,wght@0,100..900;1,100..900",
          },
        ],
      },
    }),
    react(),
    TsconfigPaths(),
    Mdx(),
  ],
});
