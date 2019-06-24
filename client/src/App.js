import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/createApolloClient";
import { Emergencies } from "./modules";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Emergencies />
  </ApolloProvider>
);

export default App;
