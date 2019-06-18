// #1. Import the constructor Schema and the model() method
// Note the use of ES6 destructuring
const { Schema, model } = require("mongoose");

// #2. Instantiate a schema using mongoose Schema
const postSchema = new Schema({
  title: String,
  content: String
});

// #3. Create a model with mongoose model() method
const Post = model("post", postSchema);

module.exports = Post;
