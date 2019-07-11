import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import { GET_COMMENTS } from "./withCommentList";

const CREATE_COMMENT = gql`
  mutation($nickname: String, $content: String, $ref_id: String) {
    createdComment(nickname: $nickname, content: $content, ref_id: $ref_id) {
      nickname
      content
      ref_id
    }
  }
`;

const withCommentForm = Component => props => {
  return (
    <Mutation mutation={CREATE_COMMENT}>
      {createdComment => (
        <Component
          ref_id={props.ref_id}
          createdComment={({ nickname, content, ref_id }) =>
            createdComment({
              variables: { nickname, content, ref_id },
              refetchQueries: [{ query: GET_COMMENTS, variables: { ref_id } }]
            })
          }
        />
      )}
    </Mutation>
  );
};

export default withCommentForm;
