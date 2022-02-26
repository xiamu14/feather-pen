import "../styles/globals.css";
import "../styles/heti.css";
import "../styles/paper_base.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
