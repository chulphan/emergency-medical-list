// #1. Import the model created with mongoose
const Comment = require("./comment/model");
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
    },

    comments: (_, { ref_id }) => Comment.find({ ref_id })
  },

  Mutation: {
    createdComment: (_, { nickname, content, ref_id }) => {
      const comment = new Comment({
        nickname,
        content,
        ref_id,
        createdDate: new Date()
      });

      return comment.save();
    }
  }
};

module.exports = resolvers;
