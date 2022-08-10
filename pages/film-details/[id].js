import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

// layout for this page
import HomeLayout from "layouts/Homepage.js";

import "../../assets/css/main/main.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function FilmDetails() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(14, url_page.length);

  const [film, setFilm] = useState({});
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [ticket, setTicket] = useState([]);

  const getTicketFilm = async () => {
    const data = await fetchWrapper.get(
      `../api/film-list/get-ticket-film?id_film=${id}`
    );
    if (data) {
      setTicket(data.data);
    }
  };

  const getFilm = async () => {
    const data = await fetchWrapper.get(`../api/film-list/get-film?film=${id}`);
    if (data) {
      const newData = data.data;
      setFilm(newData[0]);
      let dataObj = newData[0];
      let newDuration = dataObj.duration.split(":");
      let hours = newDuration[0];
      let minute = newDuration[1];
      if (hours == "00") {
        setDuration(`${minute} Minutes`);
      } else {
        setDuration(`${hours} Hours ${minute} Minutes`);
      }
      let date = dataObj.date_playing.split("-");
      setDate(`${date[0]}, ${date[1]}`);
      setTime(`${date[2]}`);
    }
  };

  const getMedia = async () => {
    const data = await fetchWrapper.get(`../api/film-list/get-file?film=${id}`);
    if (data) {
      setFile(data.data);
    }
  };

  useEffect(() => {
    getFilm();
    getMedia();
    getTicketFilm();
  }, []);

  return (
    <>
      <Container
        className="p-0 m-0"
        style={{
          backgroundImage:
            "url(" +
            `https://drive.google.com/uc?export=view&id=${film.cover_image}` +
            ")",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <div className="gradient__card__detail_film">
          <Container>
            <Row className="m-0 align-items-center py-5">
              <Col lg="4" className="text-center">
                <div
                  className="title_cover"
                  style={{
                    backgroundImage:
                      "url(" +
                      `https://drive.google.com/uc?export=view&id=${film.poster_image}` +
                      ")",
                    width: "270px",
                    height: "400px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                >
                  {/* <img
                    alt="..."
                    src={require("assets/img/theme/image 6.svg")}
                    height="100%"
                  /> */}
                </div>
              </Col>
              <Col>
                <h1 style={{ color: "#ffffff" }}>{film.title}</h1>
                <div className="d-flex align-items-center mt-3">
                  <div
                    className="py-1 px-2 mr-2"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                  >
                    R
                  </div>
                  <p style={{ color: "#ffffff" }}>{duration}</p>
                </div>
                <h2 className="mt-3" style={{ color: "#ffffff" }}>
                  {film.genre}
                </h2>
                <div className="mt-3" style={{ color: "#ffffff" }}>
                  {film.description}
                </div>
                <h2 className="mt-3" style={{ color: "#FE7900" }}>
                  {film.location}
                </h2>
                <div className="d-flex">
                  <h3 className="mt-3" style={{ color: "#ffffff" }}>
                    {date}
                  </h3>
                  <h3 className="mt-3 ml-3" style={{ color: "#ffffff" }}>
                    {time}
                  </h3>
                </div>

                <Button
                  style={{ color: "#ffffff", backgroundColor: "#FE7900" }}
                  type="button"
                  className="mt-3"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Beli Tiket
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container className="d-flex align-items-center justify-content-between pt-4">
        <Col>
          <h2 style={{ color: "#FE7900" }}>Video & Foto</h2>
        </Col>
      </Container>

      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {file.map((val) => {
            if (val.type == "images") {
              return (
                <Col>
                  <Card>
                    <div>
                      <img
                        alt="..."
                        className="w-100"
                        src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                      />
                    </div>
                  </Card>
                </Col>
              );
            } else {
              return (
                <Col>
                  <Card>
                    <div>
                      <video width="100%" controls>
                        <source
                          src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Card>
                </Col>
              );
            }
          })}
        </div>
      </Container>

      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4 px-6">
          <img
            onClick={() => {
              setModalOpen(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Pembelian Tiket Melalui :</h3>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {ticket.map((val) => {
              return (
                <Button
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0",
                  }}
                  type="button"
                  className="px-3 my-1 mx-0"
                >
                  <Link href={`${val.url}`}>
                    <a target="_blank">
                      <img
                        alt="..."
                        src={`https://drive.google.com/uc?export=view&id=${val.ticket_image}`}
                        height="30px"
                      />
                    </a>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}

FilmDetails.layout = HomeLayout;

export default FilmDetails;