import React, { useState } from "react";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { withAddPost } from "../providers";

const PostForm = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitForm(event) {
    event.preventDefault();

    props.addPost({
      title: event.target.title.value,
      content: event.target.content.value
    });

    event.target.title.value = "";
    event.target.content.value = "";
  }

  return (
    <div className="post-form">
      <h2>Create new post</h2>
      <Form onSubmit={event => submitForm(event)}>
        <FormGroup>
          <Label for="postTitle">Post title</Label>
          <Input type="text" name="title" id="postTitle" placeholder="Title" />
        </FormGroup>
        <FormGroup>
          <Label for="postContent">Post Content</Label>
          <Input
            type="textarea"
            name="content"
            id="postContent"
            placeholder="Content"
          />
        </FormGroup>
        <Button className="submit-button">Submit new post</Button>
      </Form>
    </div>
  );
};

export default withAddPost(PostForm);
