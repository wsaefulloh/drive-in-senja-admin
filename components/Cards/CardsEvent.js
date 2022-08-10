import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";
import Link from "next/link";

function CardEvents(props) {
  let { img, id, title } = props;

  return (
    <>
      <Col>
        <Card
          style={{
            backgroundImage:
              "url(" +
              `https://drive.google.com/uc?export=view&id=${img}` +
              ")",
            height: "250px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <CardBody className="gradient__card__events d-flex align-items-end">
            <div className="w-100">
              <CardTitle className="mb-2" tag="h3" style={{ color: "#ffffff" }}>
                {title}
              </CardTitle>
              <Link href={`/event-promotion/${id}`}>
                <Button
                  style={{
                    color: "#ffffff",
                    width: "100%",
                    backgroundColor: "#FE7900",
                    border: "0",
                  }}
                  type="button"
                  className="w-100 p-1"
                >
                  <span>Selengkapnya</span>
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

CardEvents.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  id: PropTypes.any,
};

export default CardEvents;
