import React from "react";
import { withEmergency } from "../providers";
import { Emergency } from "../components";

const emergency = ({ emergency, emergencyLoading }) => {
  return (
    <React.Fragment>
      <Emergency emergency={emergency} emergencyLoading={emergencyLoading} />
    </React.Fragment>
  );
};

export default withEmergency(emergency);
