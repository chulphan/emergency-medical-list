// #1. Import gql method from apollo-server-express
const { gql } = require("apollo-server-express");

// #2. Construct a schema with gql and using the GraphQL schema Language
const typeDefs = gql`
  type Post {
    _id: ID
    title: String
    content: String
  }

  type Query {
    posts: [Post]
    post: Post
  }

  type Mutation {
    addPost(title: String!, content: String!): Post
  }
`;

module.exports = typeDefs;
