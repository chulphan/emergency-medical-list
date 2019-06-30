// #1. Import the model created with mongoose
const Post = require("./post/model");
const Emergency = require("./emergency/model");
const mongoose = require("mongoose");

// #2. Create resolver functions to handle GraphQL queries
/*
 *  Query resolver "post" must return values in response to
 *  the query "posts" in GraphQL schema.
 */

const getEmergencyList = ({ limit = 10, offset = 0 }) =>
  Emergency.find({})
    .skip(offset)
    .limit(limit);

const resolvers = {
  Query: {
    // Query which returns posts list
    emergency_list: (_, variables) => getEmergencyList(variables),
    emergency: (_, { hospital_id }) => {
      return Emergency.findOne({ hospital_id });
    }
  }

  /**
   * Mutation resolver addPost creates a new document in MongoDB
   * in response to the "addPost" mutation in GraphQL schema.
   * The mutation resolvers must return the created object.
   */
};

module.exports = resolvers;
