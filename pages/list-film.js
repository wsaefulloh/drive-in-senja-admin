import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Card,
  Container,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  Spinner,
} from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";

import { fetchWrapper } from "../helpers/fetch-wrapper";

import CardFilms from "components/Cards/CardsFilm.js";

import "../assets/css/main/main.module.css";

function ListFilm() {
  const [film, setFilm] = useState([]);
  const [location, setLocation] = useState([]);
  const [genre, setGenre] = useState([]);
  const [theme, setTheme] = useState([]);
  const [values, setValues] = useState({
    film: "",
    location: "Semua",
    id_location: "Semua",
    id_genre: "Semua",
    id_theme: "Semua",
    genre: "Semua",
    theme: "Semua",
  });
  const [loading, setLoading] = useState(false);

  const getFilm = async () => {
    const data = await fetchWrapper.get(`api/film-list`);
    if (data) {
      setFilm(data.data);
    }
  };

  const getFilmFilter = async () => {
    setLoading(true);
    const data = await fetchWrapper.get(
      `api/film-list/get-film-filter?location=${values.id_location}&genre=${values.id_genre}&theme=${values.id_theme}&title=${values.film}`
    );
    if (data) {
      setLoading(false);
      setFilm(data.data);
    }
  };

  const getLocation = async () => {
    const data = await fetchWrapper.get(`api/get-location`);
    if (data) {
      setLocation(data.data);
    }
  };

  const getGenre = async () => {
    const data = await fetchWrapper.get(`api/get-genre`);
    if (data) {
      setGenre(data.data);
    }
  };

  const getTheme = async () => {
    const data = await fetchWrapper.get(`api/get-theme`);
    if (data) {
      setTheme(data.data);
    }
  };

  useEffect(() => {
    getTheme();
    getGenre();
    getLocation();
    getFilm();
  }, []);

  useEffect(() => {
    getFilmFilter();
  }, [values]);

  return (
    <>
      <Container className="pt-4">
        <Col>
          <Row className="m-0 p-0">
            <h2>Now Playing</h2>
            {values.location == "Semua" ? (
              <></>
            ) : (
              <>
                <h2 className="ml-2">at</h2>
                <h2 className="ml-2" style={{ color: "#FE7900" }}>
                  {values.location}
                </h2>
              </>
            )}
          </Row>
        </Col>
      </Container>

      <Container className="pt-2">
        <Col>
          <Row className="m-0 p-0 align-items-center">
            <div className="pr-3 py-2">
              <input
                className="search w-100"
                type="text"
                placeholder="Cari Film"
                onChange={(e) =>
                  setValues({
                    ...values,
                    film: e.target.value,
                  })
                }
              />
            </div>

            <div className="m-0 p-2">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Location:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {values.location}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    <DropdownItem
                      onClick={() => {
                        setValues({
                          ...values,
                          location: "Semua",
                          id_location: "Semua",
                        });
                      }}
                    >
                      <span>Semua</span>
                    </DropdownItem>
                    {location.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValues({
                              ...values,
                              location: val.name_location,
                              id_location: val.id,
                            });
                          }}
                        >
                          <span>{val.name_location}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="p-2 m-0">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Genre:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {values.genre}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    <DropdownItem
                      onClick={() => {
                        setValues({
                          ...values,
                          genre: "Semua",
                          id_genre: "Semua",
                        });
                      }}
                    >
                      <span>Semua</span>
                    </DropdownItem>
                    {genre.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValues({
                              ...values,
                              genre: val.name_genre,
                              id_genre: val.id,
                            });
                          }}
                        >
                          <span>{val.name_genre}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="p-2 m-0">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Theme:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {values.theme}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    <DropdownItem
                      onClick={() => {
                        setValues({
                          ...values,
                          theme: "Semua",
                          id_theme: "Semua",
                        });
                      }}
                    >
                      <span>Semua</span>
                    </DropdownItem>
                    {theme.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValues({
                              ...values,
                              theme: val.name_theme,
                              id_theme: val.id,
                            });
                          }}
                        >
                          <span>{val.name_theme}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>
          </Row>
        </Col>
      </Container>

      {loading != false ? (
        <>
          <div className="p-5 text-center align-content-center align-items-center">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            {` `}
            Loading...
          </div>
        </>
      ) : (
        <>
          {film.length != 0 ? (
            <Container className="pt-4">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
                {film.map((val) => {
                  return (
                    <CardFilms
                      img={val.poster_image}
                      title={val.title}
                      date={val.date_playing}
                      genre={val.genre}
                      id={val.id_film}
                      url_gotix={val.url_ticket_gotix}
                      url_locket={val.url_ticket_loket}
                    />
                  );
                })}
              </div>
            </Container>
          ) : (
            <Container className="py-5">
              <Col>
                <Row className="m-0 p-0">
                  <div style={{ fontSize: "14px" }}>
                    Maaf, film yang anda cari belum tersedia
                  </div>
                </Row>
              </Col>
            </Container>
          )}
        </>
      )}
    </>
  );
}

ListFilm.layout = HomeLayout;

export default ListFilm;
