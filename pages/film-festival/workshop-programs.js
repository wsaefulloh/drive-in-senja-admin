import React, { useEffect, useState } from "react";
import Link from "next/link";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardsWorkshop from "components/Cards/CardsWorkshop.js";

import CardsJudges from "components/Cards/CardsJudges.js";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import { Timeline } from "react-beautiful-horizontal-timeline";

import "../../assets/css/main/main.module.css";

function WorkshopProgram() {
  const [labelWidth, setlabelWidth] = useState(140);
  const [amountMove, setamountMove] = useState(350);
  const [lineColor, setlineColor] = useState("#ffffff");
  const [darkMode, setdarkMode] = useState(false);
  const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
  const [showSlider, setshowSlider] = useState(false);
  const [arrowsSize, setarrowsSize] = useState(false);

  const [header, setHeader] = useState();
  const [workshop, setWorkshop] = useState([]);
  const [sponsorship, setSponsorship] = useState([]);
  const [judges, setJudges] = useState([]);
  const [timeline, setTimeline] = useState([]);
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

  const getTimeline = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-timeline`);
    if (data) {
      setTimeline(data.data);
    }
  };

  const getJudges = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-juree`);
    if (data) {
      setJudges(data.data);
    }
  };

  const getSponsorship = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-sponsorship`);
    if (data) {
      setSponsorship(data.data);
    }
  };

  const getWorkshop = async () => {
    const data = await fetchWrapper.get(`../api/film-festival/get-workshop`);
    if (data) {
      setWorkshop(data.data);
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
    getWorkshop();
    getSponsorship();
    getJudges();
    getTimeline();
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
          <Row className="align-items-center justify-content-between py-4">
            <h2 className="p-0 m-0">Workshop & Programs</h2>
          </Row>
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {workshop.map((val) => {
            return (
              <CardsWorkshop
                image={val.url_image}
                desc={val.description}
                title={val.name_workshop}
                url={val.url_form}
              />
            );
          })}
        </div>
      </Container>

      <Container>
        <Col>
          <Row className="align-items-center justify-content-between py-4">
            <h2 className="p-0 m-0">Judges</h2>
          </Row>
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {judges.map((val) => {
            return (
              <CardsJudges
                image={val.url_image}
                desc={val.description}
                name={val.name_judges}
              />
            );
          })}
        </div>
      </Container>

      <div style={{ backgroundColor: "#FE7900" }} className="p-0 mt-4">
        <Container className="pt-4 pb-4">
          <Col>
            <h2 className="text-center" style={{ color: "#ffffff" }}>
              Timeline :
            </h2>
            <div className="App">
              <Timeline
                myList={timeline}
                labelWidth={labelWidth}
                amountMove={amountMove}
                lineColor={lineColor}
                darkMode={darkMode}
                eventTextAlignCenter={eventTextAlignCenter}
                showSlider={showSlider}
                arrowsSize={arrowsSize}
              />
            </div>
          </Col>
        </Container>
      </div>

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

WorkshopProgram.layout = HomeLayout;

export default WorkshopProgram;
