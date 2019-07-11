import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const GET_COMMENTS = gql`
  query($ref_id: String) {
    comments(ref_id: $ref_id) {
      nickname
      content
      createdDate
    }
  }
`;

const withCommentList = Component => props => {
  console.log("asdfsadf ", props);
  return (
    <Query query={GET_COMMENTS} variables={{ ref_id: props }}>
      {({ loading, data }) => {
        return (
          <Component
            commentsLoading={loading}
            comments={data && data.comments}
            {...props}
          />
        );
      }}
    </Query>
  );
};

export default withCommentList;
