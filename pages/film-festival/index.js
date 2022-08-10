import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Container, Row, Col, Card } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Router from "next/router";

import "../../assets/css/main/main.module.css";
import Link from "next/link";

function FilmFestival() {
  const [header, setHeader] = useState();
  const [status, setStatus] = useState();
  const [background, setBackground] = useState({
    title: "",
    description: "",
    url_image: "",
  });
  const [about, setAbout] = useState({
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

  const getAbout = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-about`);
    if (data) {
      let newData = data.data;
      let dataAbout = newData[0];
      setAbout({
        ...about,
        title: dataAbout.title,
        description: dataAbout.description,
        url_image: dataAbout.url_image,
      });
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
    getAbout();
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

      <Container className="pt-4">
        <Row>
          <Col lg="6" className="pb-4">
            <Row className="justify-content-center align-items-center">
              <img
                alt="..."
                src={`https://drive.google.com/uc?export=view&id=${about.url_image}`}
                width="95%"
                style={{ borderRadius: "5px" }}
              />
            </Row>
          </Col>
          <Col>
            <div className="pb-4 px-4">
              <h1>{about.title}</h1>
              <div className="pt-3">{about.description}</div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="pb-4 justify-content-center align-items-center">
          <Button
            className="m-1"
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              borderRadius: "10px",
            }}
            type="button"
            onClick={() => {
              Router.push("/film-festival/landing-submit");
            }}
          >
            Film Submission
          </Button>
          <Button
            className="m-1"
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              borderRadius: "10px",
            }}
            type="button"
            onClick={() => {
              Router.push("/film-festival/workshop-programs");
            }}
          >
            Workshop & Program
          </Button>
        </Row>
      </Container>
    </>
  );
}

FilmFestival.layout = HomeLayout;

export default FilmFestival;
