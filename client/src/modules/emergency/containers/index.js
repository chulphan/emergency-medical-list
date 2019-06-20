import React from "react";
import { withEmergencies } from "../providers";
import { EmergencyList } from "../components";
import { Container, Row, Col } from "reactstrap";
import "../styles/styles.css";

const EmergencyRoot = ({ emergencies, emergenciesLoading }) => {
  return (
    <Container>
      <EmergencyList
        emergenciesLoading={emergenciesLoading}
        emergencies={emergencies}
      />
    </Container>
  );
};

export default withEmergencies(EmergencyRoot);
