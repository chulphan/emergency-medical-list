import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/createApolloClient";
import { Header } from "./modules/common/components";

import "./public/styles/css/globalCss.css";

const Emergencies = lazy(() =>
  import("./modules/emergency/containers/index.js")
);
const Emergency = lazy(() =>
  import("./modules/emergency/containers/Emergency.js")
);

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Suspense fallback={<div />}>
        <Header />
        <Switch>
          <Route path="/" exact component={Emergencies} />
          <Route path="/:id" component={Emergency} />
        </Switch>
      </Suspense>
    </Router>
  </ApolloProvider>
);

export default App;
