import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { dogStore } from "@/app/store/dogStore";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

import "../../i18";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={dogStore}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
