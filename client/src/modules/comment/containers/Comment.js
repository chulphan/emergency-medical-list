import React from "react";
import { CommentForm } from "../components";
import { Row, Col } from "reactstrap";

const Comment = ref_id => {
  return (
    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Col>
        <CommentForm ref_id={ref_id} />
      </Col>
    </Row>
  );
};

export default Comment;
