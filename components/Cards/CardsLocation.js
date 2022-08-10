import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import Link from "next/link";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

function CardsLocation(props) {
  let { frame, name, date, detail, url_maps } = props;
  let html = `${frame}`;
  let result = html.replace('width="600"', 'width="100%"');
  let resultFinal = result.replace('height="450"', 'height="100%"');
  return (
    <>
      <Col className="p-0 m-0">
        <Row style={{ marginBottom: "15px" }}>
          <Col
            lg="6"
            className="p-4 m-0 background_location d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <div className="justify-content-center mb-4">
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  width="120px"
                  className="mx-auto"
                />
              </div>
              <div className="justify-content-center mb-4">
                <h2 className="mb-4" style={{ color: "#ffffff" }}>
                  {name}
                </h2>
                <p className="mb-4" style={{ color: "#ffffff" }}>
                  {date}
                </p>
                <div className="px-3" style={{ color: "#ffffff" }}>
                  {detail}
                </div>
              </div>
              <Link href={url_maps}>
                <Button
                  color="secondary"
                  style={{ color: "#FE7900" }}
                  type="button"
                >
                  Maps
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg="6" className="p-0 m-0 background_maps">
            <div
              className="w-100 h-100"
              dangerouslySetInnerHTML={{ __html: resultFinal }}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}

CardsLocation.propTypes = {
  name: PropTypes.any,
  frame: PropTypes.any,
  date: PropTypes.any,
  detail: PropTypes.any,
  url_maps: PropTypes.any,
};

export default CardsLocation;
