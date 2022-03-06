import { defineConfig } from "blogkit";
import { request } from "./blogkit/request";
import { theme } from "./blogkit/theme";

export default defineConfig({
  siteConfig: {
    title: "Blogkit example",
    author: "2nthony",
    url: "https://github.com/2nthony/blogkit-example",
  },
  theme,
  request,
});
