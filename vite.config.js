// https://vite.dev/config/
export default {
  // A project site lives at /<repository-name>/ on GitHub Pages.
  // Use / when running locally so asset paths resolve correctly.
  base: Deno.env.get("REPO_NAME") ? `/${Deno.env.get("REPO_NAME")}/` : "/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    sourcemap: true,
  },
};
