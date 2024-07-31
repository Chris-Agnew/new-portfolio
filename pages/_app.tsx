import "../styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-M9J75R27" />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
