import { useEffect } from "react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default App;