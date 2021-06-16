/** @type {import('@sveltejs/kit').Config} */
import fs from "fs";

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      server: {
        https: {
          key: fs.readFileSync("example.key"),
          cert: fs.readFileSync("example.crt"),
        },
      },
    },
  },
};

export default config;
