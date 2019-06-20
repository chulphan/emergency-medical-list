import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const EmergencyList = ({ emergencies, emergenciesLoading }) => {
  function showEmergencyList() {
    if (!emergenciesLoading && emergencies.length > 0) {
      return emergencies.map(emergency => (
        <Card key={emergency._id} body outline className="post-card">
          <CardTitle>{emergency.hospital_name}</CardTitle>
          <CardBody>
            <React.Fragment>
              {emergency.hospital_address}
              <br />
              {emergency.hospital_call}
              <br />
              {emergency.hospital_emergency_call}
              <br />
              {emergency.list_of_treat}
            </React.Fragment>
          </CardBody>
        </Card>
      ));
    } else {
      return (
        <div>
          <h3>병원 정보가 없습니다</h3>
        </div>
      );
    }
  }

  return <div className="posts-container">{showEmergencyList()}</div>;
};

export default EmergencyList;
