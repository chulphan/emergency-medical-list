// #1. Import express and apollo server
const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

// #2. Import mongoose
const mongoose = require("./config/database");

// #3. Import GraphQL type definitions
const typeDefs = require("./modules/models/typeDefs");

// #4. Import GraphQL resolvers
const resolvers = require("./modules/models/resolvers");

// #5. Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// #6. Initialize an Express application
const app = express();

// #7. Use the express application as middleware in Apollo Server
server.applyMiddleware({ app });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/public/index.html"));
});

// #8. Set the port that the Express application will listen to
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000${server.graphqlPath}`);
});
