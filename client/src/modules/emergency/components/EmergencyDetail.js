import React from "react";
import { Card, CardTitle, CardBody, Spinner, Row, Col } from "reactstrap";

const Emergency = ({ emergency, emergencyLoading }) => {
  function showEmergency() {
    if (!emergencyLoading && emergency) {
      return (
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card body outline className="post-card">
              <CardTitle>{emergency.hospital_name}</CardTitle>
            </Card>
          </Col>
        </Row>
      );
    } else {
      return <p>정보가 없습니다</p>;
    }
  }
  return <div>{showEmergency()}</div>;
};

export default Emergency;
