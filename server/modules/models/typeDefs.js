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

  type Query {
    emergency_list: [Emergency]
    emergency: Emergency
  }
`;

module.exports = typeDefs;
