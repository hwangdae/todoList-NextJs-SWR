import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../swr";

const app = ({ Component, pageProps }) => {
  return (
    // <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    // </SWRConfig>
  );
};

export default app;
