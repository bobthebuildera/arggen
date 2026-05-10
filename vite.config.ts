// @lovable.dev/vite-tanstack-config wires TanStack Start's Vite plugin from
// `@tanstack/react-start/plugin/vite` (built on `@tanstack/start-plugin-core`) together with
// `@cloudflare/vite-plugin` during `vite build` — the Cloudflare Workers / Pages SSR setup from the
// TanStack + Cloudflare docs. Do NOT duplicate those plugins here or the build will break.
//
// Also bundled: viteReact, tailwindcss, tsConfigPaths, componentTagger (dev),
// VITE_* env injection, @ alias, React/TanStack dedupe, error logger plugins, sandbox defaults.
// Extra options: defineConfig({ vite: { ... } }).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin emits dist/server + wrangler snapshot from this entry.
export default defineConfig({
  cloudflare: {
    viteEnvironment: { name: "ssr" },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    publicDir: "public",
  },
});
