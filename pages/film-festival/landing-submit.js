import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Router from "next/router";

import "../../assets/css/main/main.module.css";
import Link from "next/link";

function LandingSubmit() {
  const [header, setHeader] = useState();
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
        <Row className="pb-4 justify-content-center align-items-center">
          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              borderRadius: "10px",
            }}
            type="button"
            onClick={() => {
              Router.push("/film-festival/landing-submit/#film-submit");
            }}
          >
            Film Submission
          </Button>
          <Button
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

      <div
        style={{ backgroundColor: "#FE7900" }}
        className="p-0 mb-4"
        id="film-submit"
      >
        <Container className="py-4">
          <Col>
            <h2 className="text-center" style={{ color: "#ffffff" }}>
              Langkah Pendaftaran
            </h2>
            <div className="align-items-center pt-3 row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah1.svg")}
                    width="35%"
                  />
                  <div className="mt-2 langkah_number">1</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "13px" }}
                  >
                    Klik submit untuk submit karya kamu
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah2.svg")}
                    width="35%"
                  />
                  <div className="mt-2 langkah_number">2</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "13px" }}
                  >
                    Isi formulir dengan data yang sebenar-benarnya, berikan
                    alamat email dan nomor telepon yang aktif apabila kami
                    menghubungimu di kemudian hari
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah3.svg")}
                    width="35%"
                  />
                  <div className="mt-2 langkah_number">3</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "13px" }}
                  >
                    Berikan persetujuan kamu atas syarat dan ketentuan yang
                    berlaku dengan mencentang (√) “Iya” di bagian bawah formulir
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah4.svg")}
                    width="35%"
                  />
                  <div className="mt-2 langkah_number">4</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "13px" }}
                  >
                    Klik submit
                  </div>
                </div>
              </Col>
            </div>
            <div className="text-center">
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
                onClick={() => {
                  Router.push("/film-festival/register");
                }}
              >
                Submit
              </Button>
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

LandingSubmit.layout = HomeLayout;

export default LandingSubmit;
