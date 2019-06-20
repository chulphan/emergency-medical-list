import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const GET_EMERGENCY_LIST = gql`
  {
    emergency_list {
      _id
      hospital_name
      hospital_address
      hospital_call
      hospital_emergency_call
      list_of_treat
    }
  }
`;

const withEmergencies = Component => props => {
  return (
    <Query query={GET_EMERGENCY_LIST}>
      {({ loading, data }) => {
        return (
          <Component
            emergenciesLoading={loading}
            emergencies={data && data.emergency_list}
            {...props}
          />
        );
      }}
    </Query>
  );
};

export default withEmergencies;
