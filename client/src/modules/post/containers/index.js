import React from "react";
import { withPosts } from "../providers";
import { PostList, PostForm } from "../components";
import { Container, Row, Col } from "reactstrap";
import "../styles/styles.css";

const PostRoot = ({ posts, postsLoading }) => (
  <Container>
    <h2 className="posts-title">
      <span style={{ color: "blue" }}>Template</span>
    </h2>
    <hr />
    <Row>
      <Col>
        <PostList postsLoading={postsLoading} posts={posts} />
      </Col>
      {/* <Col>
        <PostForm />
      </Col> */}
    </Row>
  </Container>
);

export default withPosts(PostRoot);
