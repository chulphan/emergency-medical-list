import React, { useState, useEffect } from "react";
import { withCommentForm } from "../providers";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const CommentForm = props => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [refId, setRefId] = useState("");

  useEffect(() => {
    setRefId(props.ref_id);
  });

  function handleNickname(e) {
    const { value } = e.target;

    setNickname(value);
  }

  function handleContent(e) {
    const { value } = e.target;

    setContent(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (nickname.length === 0) {
      alert("닉네임을 입력해주세요");
      return false;
    }

    if (content.length === 0) {
      alert("내용을 입력해주세요");
      return false;
    }

    props.createdComment({
      nickname,
      content,
      ref_id: refId
    });

    setNickname("");
    setContent("");
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h4>댓글</h4>
        </CardTitle>
        <Form onSubmit={event => handleSubmit(event)}>
          <FormGroup>
            <Label for="nickname">작성자</Label>
            <Input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              onChange={handleNickname}
              value={nickname}
            />
          </FormGroup>
          <FormGroup>
            <Label for="commentContent">댓글 입력</Label>
            <Input
              type="textarea"
              name="content"
              id="commentContent"
              placeholder="댓글을 입력해주세요"
              onChange={handleContent}
              value={content}
            />
          </FormGroup>
          <Button type="submit" color="primary" style={{ float: "right" }}>
            등록
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default withCommentForm(CommentForm);
