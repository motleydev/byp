import "../styles/globals.css";
import type { AppProps } from "next/app";
import withUrql from "../utils/client";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrql(MyApp);
