import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const GET_EMERGENCY_LIST = gql`
  query emergency_list($offset: Int) {
    emergency_list(limit: 10, offset: $offset) {
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
      {({ data, loading, fetchMore }) => {
        const offset =
          data && data.emergency_list ? data.emergency_list.length : 0;
        if (!!data) {
          return (
            <Component
              emergenciesLoading={loading}
              emergencies={data && data.emergency_list}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    offset
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevResult;
                    return {
                      emergency_list: [
                        ...prev.emergency_list,
                        ...fetchMoreResult.emergency_list
                      ]
                    };
                  }
                })
              }
            />
          );
        } else {
          return <Component emergenciesLoading={loading} emergencies={[]} />;
        }
      }}
    </Query>
  );
};

export default withEmergencies;
