import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Blogkit } from "blogkit";
import blogkitConfig from "../blogkit.config";

export const blogkit = new Blogkit(blogkitConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
