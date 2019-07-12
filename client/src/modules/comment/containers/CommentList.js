import React from "react";
import { withCommentList } from "../providers";
import { CommentList } from "../components";
import { Container, Row, Col } from "reactstrap";

const Comments = ({ comments, commentsLoading }) => {
  return (
    <Row>
      <Col>
        <CommentList comments={comments} commentsLoading={commentsLoading} />
      </Col>
    </Row>
  );
};

export default withCommentList(Comments);
