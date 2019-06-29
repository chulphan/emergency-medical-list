import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/createApolloClient";
import { Emergencies } from "./modules";
import { Header } from "./modules/common/components";

import "./public/styles/css/globalCss.css";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Header />
    <Emergencies />
  </ApolloProvider>
);

export default App;
