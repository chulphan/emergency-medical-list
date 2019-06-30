import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const GET_EMERGENCY = gql`
  query emergency($hospital_id: String) {
    emergency(hospital_id: $hospital_id) {
      _id
      hospital_name
      hospital_address
      hospital_call
      hospital_emergency_call
      list_of_treat
    }
  }
`;

const withEmergency = Component => props => {
  const variables = {
    hospital_id: props.match.params.id
  };
  console.log(variables);
  return (
    <Query query={GET_EMERGENCY} variables={variables}>
      {({ data, loading }) => {
        console.log("data ", data);
        return (
          <Component
            emergencyLoading={loading}
            emergency={data && data.emergency}
          />
        );
      }}
    </Query>
  );
};

export default withEmergency;
