import "@src/styles/globals.css";
import "@src/styles/heti.css";
import "@src/styles/paper_base.css";
import "@src/styles/prism.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
