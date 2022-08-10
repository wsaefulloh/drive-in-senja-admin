import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardEvent from "components/Cards/CardsEvent.js";

import CardFilms from "components/Cards/CardsFilm.js";

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import Link from "next/link";

import "../assets/css/main/main.module.css";

function Home() {
  const [eventsPromotions, setEventsPromotions] = useState([]);
  const [film, setFilm] = useState([]);
  const [tagline, setTagline] = useState([]);
  const [ticketPlatform, setTicketPlatform] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  let settingSlideFilm = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: film.length < 4 ? film.length : 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: true,
          slidesToShow: film.length < 2 ? film.length : 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const settingTagline = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingAutoPlaySponsorship = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  const getEventsPromotions = async () => {
    const data = await fetchWrapper.get(`api/events-promotions`);
    if (data) {
      setEventsPromotions(data.data);
    }
  };

  const getTicketPlatform = async () => {
    const data = await fetchWrapper.get(`api/get-ticket-platform`);
    if (data) {
      setTicketPlatform(data.data);
    }
  };

  const getFilm = async () => {
    const data = await fetchWrapper.get(`api/film-list`);
    if (data) {
      setFilm(data.data);
    }
  };

  const getTagline = async () => {
    const data = await fetchWrapper.get(`api/get-tagline`);
    if (data) {
      setTagline(data.data);
    }
  };

  useEffect(() => {
    getEventsPromotions();
    getFilm();
    getTagline();
    getTicketPlatform();
  }, []);

  return (
    <>
      <Container className="p-0 m-0" style={{ maxWidth: "100%" }}>
        <Row className="m-0">
          <Col lg="5" className="p-0">
            <Container className="background__home text-center py-6">
              <div className="justify-content-center mb-4">
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  width="120px"
                />
              </div>
              <div className="justify-content-center mb-4">
                <img
                  alt="..."
                  src={require("assets/img/brand/333333.png")}
                  width="78%"
                />
              </div>
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Beli Tiket
              </Button>
            </Container>
          </Col>
          <Col lg="7" className="p-0 background__image"></Col>
        </Row>
      </Container>

      <Container id="events">
        <Col>
          <Row className="align-items-center justify-content-between py-4">
            <h2 className="p-0 m-0">Event & Promotions</h2>
            <Link href={`/event-promotion`}>
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
              >
                Lihat Lebih Banyak
              </Button>
            </Link>
          </Row>
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {eventsPromotions.map((val) => {
            return (
              <CardEvent img={val.poster_image} id={val.id} title={val.title} />
            );
          })}
        </div>
      </Container>

      <Container className="pt-4">
        <h2 className="text-center">Telah Diliput oleh :</h2>
        <Slider {...settingAutoPlaySponsorship} className="pt-3">
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Metro.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/RCTI.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Kompas.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Kumparan.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Liputan6.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/detik.svg")}
                width="100%"
              />
            </Row>
          </Col>
        </Slider>
      </Container>

      <Container className="pt-4">
        <Card className="bg-carousel">
          <Container className="d-flex align-items-center justify-content-between py-4 px-5">
            <h2 style={{ color: "#ffffff" }}>Now Playing</h2>
            <Link href={`/list-film`}>
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
              >
                Lainnya ...
              </Button>
            </Link>
          </Container>
          <Container>
            <div className="carousel-box">
              <Slider {...settingSlideFilm} className="slider-playnow">
                {film.map((val) => {
                  return (
                    <CardFilms
                      img={val.poster_image}
                      title={val.title}
                      date={val.date_playing}
                      genre={val.genre}
                      id={val.id_film}
                    />
                  );
                })}
              </Slider>
            </div>
          </Container>
        </Card>
      </Container>

      <Container className="pt-4">
        <Col>
          <h2 className="text-center">Dapat dibeli di :</h2>
          <Row className="align-items-center justify-content-center pt-3 mb-4">
            {ticketPlatform.map((val) => {
              return (
                <div className="mx-2">
                  <Link href={`${val.url_ticket}`}>
                    <a target="_blank">
                      <img
                        alt="..."
                        src={`https://drive.google.com/uc?export=view&id=${val.url_image}`}
                        height="35px"
                      />
                    </a>
                  </Link>
                </div>
              );
            })}
          </Row>
        </Col>
      </Container>

      <Container className="pt-4 mb-4">
        <Card className="background-3">
          <Row className="m-0 align-items-center">
            <Container className="pt-4" style={{ maxWidth: "80%" }}>
              <div className="carousel-box p-0">
                <Slider {...settingTagline} className="slider-experience">
                  {tagline.map((val) => {
                    return (
                      <>
                        <Row className="m-0 align-items-center">
                          <Col lg="6">
                            <Row className="justify-content-center mb-4 align-items-center">
                              <img
                                alt="..."
                                src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                                width="100%"
                                style={{ borderRadius: "5px" }}
                              />
                            </Row>
                          </Col>
                          <Col>
                            <Container className="pb-4 pt-2">
                              <h1 className="mb-4" style={{ color: "#ffffff" }}>
                                {val.title}
                              </h1>
                              <div
                                className="mb-4"
                                style={{ color: "#ffffff" }}
                              >
                                {val.description}
                              </div>
                              <Button
                                color="secondary"
                                style={{ color: "#FE7900" }}
                                type="button"
                                onClick={() => {
                                  setModalOpen(true);
                                }}
                              >
                                Beli Tiket
                              </Button>
                            </Container>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </Container>
          </Row>
        </Card>
      </Container>

      <Container
        id="food-drink"
        className="p-0 m-0 background_food"
        style={{ maxWidth: "100%" }}
      >
        <Row className="justify-content-center align-items-center py-6 m-0">
          <div className="text-center py-6">
            <div
              className="text-center"
              style={{ color: "#ffffff", fontSize: "10vw" }}
            >
              FOOD & DRINK
            </div>
            <Link href="http://bit.ly/menudirveinsenja">
              <a target="_blank">
                <Button
                  style={{
                    color: "#000000",
                    marginTop: "20px",
                    backgroundColor: "#FE7900",
                    border: "0",
                  }}
                  type="button"
                >
                  Pesan Sekarang
                </Button>
              </a>
            </Link>
          </div>
        </Row>
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
            {ticketPlatform.map((val) => {
              return (
                <Button
                  style={{
                    backgroundColor: "#ffffff",
                    border: "0",
                  }}
                  type="button"
                  className="px-3 my-1 mx-0"
                >
                  <Link href={`${val.url_ticket}`}>
                    <a target="_blank">
                      <img
                        alt="..."
                        src={`https://drive.google.com/uc?export=view&id=${val.url_image}`}
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

Home.layout = HomeLayout;

export default Home;
