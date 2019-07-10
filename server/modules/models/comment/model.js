const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    ref_id: String,
    nickname: String,
    createdDate: Date,
    content: String
  },
  { collection: "comment" }
);

const Comment = model("comment", commentSchema);

module.exports = Comment;
