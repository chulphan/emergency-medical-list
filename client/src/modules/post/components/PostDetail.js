import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const PostDetail = ({ title, content }) => {
  function showDetail() {
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>{content}</CardBody>
    </Card>;
  }

  return <div className="posts-card">{showDetail()}</div>;
};
