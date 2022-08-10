import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardsFinalist from "components/Cards/CardsFinalist.js";

import CardsJudges from "components/Cards/CardsJudges.js";

import CardFilms from "components/Cards/CardsFilm.js";

import Slider from "react-slick";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import "../../assets/css/main/main.module.css";
import Link from "next/link";

function JureeFinalist() {
  const [header, setHeader] = useState();
  const [finalist, setFinalist] = useState([]);
  const [sponsorship, setSponsorship] = useState([]);
  const [status, setStatus] = useState();
  const [background, setBackground] = useState({
    title: "",
    description: "",
    url_image: "",
  });
  const getHeader = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-header`);
    if (data) {
      let newData = data.data;
      let image = newData[0];
      setHeader(image.url_image);
    }
  };
  const getSponsorship = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-sponsorship`);
    if (data) {
      setSponsorship(data.data);
    }
  };
  const getFinalist = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-finalist`);
    if (data) {
      setFinalist(data.data);
    }
  };

  const getBackground = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-background`);
    if (data) {
      let newData = data.data;
      let dataBackground = newData[0];
      setBackground({
        ...background,
        title: dataBackground.title,
        description: dataBackground.description,
        url_image: dataBackground.url_image,
      });
    }
  };

  const getStatus = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-status`);
    if (data) {
      let newData = data.data;
      let status = newData[0];
      setStatus(status.title);
    }
  };

  useEffect(() => {
    getHeader();
    getSponsorship();
    getFinalist();
    getStatus();
    getBackground();
  }, []);

  return status != "active" ? (
    <>
      <div
        className="p-0 m-0"
        style={{
          backgroundImage:
            "url(" +
            `https://drive.google.com/uc?export=view&id=${background.url_image}` +
            ")",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <div className="gradient__card__detail_film">
          <Row className="justify-content-center align-items-center py-6 m-0">
            <div className="text-center py-6">
              <div
                className="text-center"
                style={{ color: "#FE7900", fontSize: "8vw" }}
              >
                {background.title}
              </div>
              <div
                className="text-center"
                style={{ color: "#ffffff", fontSize: "2vw" }}
              >
                {background.description}
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  ) : (
    <>
      <Container
        className="p-0 m-0"
        style={{
          backgroundImage:
            "url(" +
            `https://drive.google.com/uc?export=view&id=${header}` +
            ")",
          height: "450px",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      ></Container>

      <Container>
        <Col>
          <Row className="align-items-center justify-content-between pt-4 pb-4">
            <h2 className="p-0 m-0">Juree Finalist</h2>
          </Row>
          {/* <Row className="align-items-center justify-content-between pt-2 pb-4">
            <div className="p-0 m-0">20 Finalist</div>
          </Row> */}
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {finalist.map((val) => {
            return (
              <CardsFinalist
                img={val.url_poster_film}
                title={val.title_film}
                sutradara={val.director_film}
                sinopsis={val.synopsis_film}
                produser={val.producers_film}
              />
            );
          })}
        </div>
      </Container>

      <Container className="py-4">
        <h2 className="text-center">Supporting Partners</h2>
        <div
          className="d-flex justify-content-center"
          style={{ flexWrap: "wrap" }}
        >
          {sponsorship.map((val) => {
            if (`${val.url_partner}` != "") {
              return (
                <Link href={`${val.url_partner}`}>
                  <a target="_blank">
                    <div
                      style={{
                        paddingLeft: "9px",
                        paddingRight: "9px",
                        paddingTop: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        alt="..."
                        src={`https://drive.google.com/uc?export=view&id=${val.url_image}`}
                        height="40px"
                        width="auto"
                      />
                    </div>
                  </a>
                </Link>
              );
            } else {
              return (
                <div
                  style={{
                    paddingLeft: "9px",
                    paddingRight: "9px",
                    paddingTop: "15px",
                  }}
                >
                  <img
                    alt="..."
                    src={`https://drive.google.com/uc?export=view&id=${val.url_image}`}
                    height="40px"
                    width="auto"
                  />
                </div>
              );
            }
          })}
        </div>
      </Container>
    </>
  );
}

JureeFinalist.layout = HomeLayout;

export default JureeFinalist;
