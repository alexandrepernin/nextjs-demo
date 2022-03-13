import type { AppProps } from "next/app";
import CssReset from "../components/CssReset/CssReset.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssReset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
