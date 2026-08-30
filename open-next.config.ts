import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // OpenNext invokes this instead of `npm run build`, so Cloudflare's
  // `npm run build` → `opennextjs-cloudflare build` does not recurse.
  buildCommand: "npx next build",
};
