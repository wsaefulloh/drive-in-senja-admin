import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardWorkshop(props) {
  let { title, url, image, desc } = props;
  return (
    <>
      <Col>
        <Card>
          <div
            style={{
              backgroundImage:
                "url(" +
                `https://drive.google.com/uc?export=view&id=${image}` +
                ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
              width: "100%",
              borderRadius: "5px 5px 0px 0px",
            }}
          ></div>
          <div className="w-100" style={{ padding: "15px" }}>
            <CardTitle className="mb-2" tag="h3" style={{ color: "#000000" }}>
              {title}
            </CardTitle>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              {desc}
            </div>
            <Link href={`${url}`}>
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
                <span>Daftar</span>
              </Button>
            </Link>
          </div>
        </Card>
      </Col>
    </>
  );
}

CardWorkshop.propTypes = {
  title: PropTypes.any,
  url: PropTypes.any,
  image: PropTypes.any,
  desc: PropTypes.any,
};

export default CardWorkshop;
