import React from "react";
import Comment from "../../comment/containers";
import { Card, CardTitle, CardBody, Spinner, Row, Col } from "reactstrap";

const Emergency = ({ emergency, emergencyLoading }) => {
  function splitTreatList(listOfTreat) {
    const splitedTreatList = listOfTreat.split(",");

    return splitedTreatList.map(treat => (
      <Col style={{ width: "200px" }} xs="6">
        {treat}
      </Col>
    ));
  }

  function showEmergency() {
    if (!emergencyLoading && emergency) {
      return (
        <React.Fragment>
          <Card style={{ textAlign: "center" }} body outline>
            <CardTitle>
              <h2 style={{ textAlign: "center" }}>{emergency.hospital_name}</h2>
            </CardTitle>
            <CardBody>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  병원주소: {emergency.hospital_address}
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  전화번호: {emergency.hospital_call}
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  응급실 번호: {emergency.hospital_emergency_call}
                </Col>
              </Row>
            </CardBody>
            <CardBody>
              <h4>진료항목</h4>
              <Row>{splitTreatList(emergency.list_of_treat)}</Row>
            </CardBody>
          </Card>
        </React.Fragment>
      );
    } else {
      return (
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Spinner
              style={{ width: "5rem", height: "5rem" }}
              color="primary"
            />
          </Col>
        </Row>
      );
    }
  }
  return (
    <div>
      {showEmergency()}
      {Comment(emergency && emergency._id)}
    </div>
  );
};

export default Emergency;
