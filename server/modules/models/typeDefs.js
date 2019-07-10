// #1. Import gql method from apollo-server-express
const { gql } = require("apollo-server-express");

// #2. Construct a schema with gql and using the GraphQL schema Language
const typeDefs = gql`
  type Emergency {
    _id: ID
    hospital_name: String
    hospital_call: String
    hospital_emergency_call: String
    hospital_address: String
    hospital_id: String
    list_of_treat: String
  }

  type Comment {
    _id: ID
    ref_id: String
    nickname: String
    createdDate: String
    content: String
  }

  input CommentInput {
    nickname: String
    content: String
    ref_id: String
  }

  type Query {
    emergency_list(limit: Int, offset: Int): [Emergency]
    emergency(hospital_id: String): Emergency
  }

  type Mutation {
    createdComment(nickname: String, content: String, ref_id: String): Comment
  }
`;

module.exports = typeDefs;
