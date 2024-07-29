import "../styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-M9J75R27" />
    </>
  );
}

export default MyApp;
