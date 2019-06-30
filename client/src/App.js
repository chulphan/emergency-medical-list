import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/createApolloClient";
import { Emergencies } from "./modules";
import { Emergency } from "./modules";
import { Header } from "./modules/common/components";

import "./public/styles/css/globalCss.css";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Emergencies} />
        <Route path="/:id" component={Emergency} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
