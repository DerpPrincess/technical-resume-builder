import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStateProvider from "./src/store/GlobalStateProvider";
import { theme } from "./src/theme/theme";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
);

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
