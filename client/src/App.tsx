import React from "react";
import { ApolloProvider } from "@apollo/react-hoc";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import client from "./apollo/ApolloClient";
import "./App.css";
import GlobalStyles from "./style/globalStyles";
import { Router } from "./page";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
