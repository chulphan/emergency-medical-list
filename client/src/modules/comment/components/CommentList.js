import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const CommentList = ({ comments, commentsLoading }) => {
  function showComments() {
    if (!commentsLoading && comments && comments.length > 0) {
      return comments.map(comment => (
        <Card key={comment._id} body outline>
          <CardTitle>
            작성자: {comment.nickname}
            <p style={{ textAlign: "right" }}>
              {new Date(parseInt(comment.createdDate)).toLocaleString("ko")}
            </p>
          </CardTitle>
          <CardBody>{comment.content}</CardBody>
        </Card>
      ));
    } else {
      <div>댓글이 없습니다.</div>;
    }
  }

  return <div>{showComments()}</div>;
};

export default CommentList;
