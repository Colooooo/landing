import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

// Exercise the production security policy during local preview as well.
const deployment = JSON.parse(
  readFileSync(new URL("./vercel.json", import.meta.url), "utf8"),
) as { headers: { headers: { key: string; value: string }[] }[] };

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    headers: Object.fromEntries(
      deployment.headers[0].headers.map(({ key, value }) => [key, value]),
    ),
  },
});
