import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

function CardFinalist(props) {
  let { img, title, sutradara, sinopsis, produser } = props;
  return (
    <>
      <Col>
        <Card>
          <div
            style={{
              backgroundImage:
                "url(" +
                `https://drive.google.com/uc?export=view&id=${img}` +
                ")",
              height: "250px",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "5px 5px 0px 0px",
            }}
          ></div>
          <div className="w-100" style={{ padding: "15px" }}>
            <CardTitle className="mb-2" tag="h3" style={{ color: "#000000" }}>
              {title}
            </CardTitle>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Produser : {produser}
            </div>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Sutradara : {sutradara}
            </div>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Sinopsis : {sinopsis}
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

CardFinalist.propTypes = {
  img: PropTypes.any,
  sutradara: PropTypes.string,
  sinopsis: PropTypes.any,
  produser: PropTypes.string,
  title: PropTypes.string,
};

export default CardFinalist;
