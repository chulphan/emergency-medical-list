import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/createApolloClient";
import { Posts, Emergencies } from "./modules";

const App = () => (
  <ApolloProvider client={apolloClient}>
    {/* <Posts /> */}
    <Emergencies />
  </ApolloProvider>
);

export default App;
