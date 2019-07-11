import React from "react";
import { CommentForm } from "../components";
import { Container, Row, Col } from "reactstrap";

const Comment = ref_id => {
  return (
    <Container>
      <Row>
        <Col>
          <CommentForm ref_id={ref_id} />
        </Col>
      </Row>
    </Container>
  );
};

export default Comment;
