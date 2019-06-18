// #1. Import the model created with mongoose
const Post = require("./post/model");

// #2. Create resolver functions to handle GraphQL queries
/*
 *  Query resolver "post" must return values in response to
 *  the query "posts" in GraphQL schema.
 */

const resolvers = {
  Query: {
    // Query which returns posts list
    posts: () => Post.find({}),
    post: _id => Post.find({ _id: _id })
  },

  /**
   * Mutation resolver addPost creates a new document in MongoDB
   * in response to the "addPost" mutation in GraphQL schema.
   * The mutation resolvers must return the created object.
   */
  Mutation: {
    addPost: (parent, post) => {
      //Create a new record in the database
      const newPost = new Post({ title: post.title, content: post.content });
      // Save the record and return it.
      return newPost.save();
    }
  }
};

module.exports = resolvers;
