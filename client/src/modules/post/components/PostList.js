import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const PostList = ({ posts, postsLoading }) => {
  function showPosts() {
    if (!postsLoading && posts.length > 0) {
      return posts.map(post => (
        <Card key={post._id} body outline className="post-card">
          <CardTitle>{post.title}</CardTitle>
          <CardBody>{post.content}</CardBody>
        </Card>
      ));
    } else {
      return (
        <div>
          <h3>No posts available</h3>
          <p>Use the form on the right to create a new post</p>
        </div>
      );
    }
  }

  return <div className="posts-container">{showPosts()}</div>;
};

export default PostList;
