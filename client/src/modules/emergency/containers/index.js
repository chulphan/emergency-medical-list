import React from "react";
import { withEmergencies } from "../providers";
import { EmergencyList } from "../components";
import { Row, Col } from "reactstrap";
import "../styles/styles.css";

const EmergencyRoot = ({ emergencies, emergenciesLoading, onLoadMore }) => {
  return (
    <React.Fragment>
      <EmergencyList
        emergenciesLoading={emergenciesLoading}
        emergencies={emergencies}
        onLoadMore={onLoadMore}
      />
    </React.Fragment>
  );
};

export default withEmergencies(EmergencyRoot);
