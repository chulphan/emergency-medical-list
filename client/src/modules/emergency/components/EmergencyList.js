import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Spinner, Row, Col } from "reactstrap";

const EmergencyList = ({ emergencies, emergenciesLoading, onLoadMore }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });

  function handleOnScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      onLoadMore();
    }
  }

  function showEmergencyList() {
    if (!emergenciesLoading && emergencies.length > 0) {
      return emergencies.map(emergency => (
        <Row key={emergency._id}>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
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
          </Col>
        </Row>
      ));
    } else if (emergenciesLoading) {
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
    } else {
      return (
        <Row>
          <Col>
            <h3>병원 정보가 없습니다</h3>
          </Col>
        </Row>
      );
    }
  }

  return <div className="posts-container">{showEmergencyList()}</div>;
};

export default EmergencyList;
