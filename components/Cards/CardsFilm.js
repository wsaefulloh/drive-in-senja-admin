import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Modal,
  Row,
  Spinner,
  UncontrolledDropdown,
} from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

import Swal from "sweetalert2";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { useRouter } from "next/router";
import CardFileFilm from "components/Cards/CardsFileFilm.js";
import CardTicketFilm from "components/Cards/CardsTicketFilm.js";

function CardFilms(props) {
  let {
    id_film,
    title,
    duration,
    id_theme,
    id_genre,
    id_location,
    description,
    date_playing,
    poster_image,
    cover_image,
    theme,
    genre,
    location,
  } = props;

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [locationArray, setLocationArray] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const [ticketArray, setTicketArray] = useState([]);
  const [ticketPlatformArray, setTicketPlatformArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [themeArray, setThemeArray] = useState([]);
  const [newData, setNewData] = useState({
    id: `${id_film}`,
    title: `${title}`,
    duration: `${duration}`,
    id_theme: `${id_theme}`,
    id_genre: `${id_genre}`,
    id_location: `${id_location}`,
    description: `${description}`,
    date_playing: `${date_playing}`,
    poster_image: `${poster_image}`,
    cover_image: `${cover_image}`,
  });
  const [value, setValue] = useState({
    theme: `${theme}`,
    genre: `${genre}`,
    location: `${location}`,
  });

  const [modalOpenFile, setModalOpenFile] = useState(false);

  const [dataFile, setDataFile] = useState({
    id_film: `${id_film}`,
    url: "",
    type: "",
  });

  const [modalOpenTicket, setModalOpenTicket] = useState(false);

  const [dataTicket, setDataTicket] = useState({
    id_film: `${id_film}`,
    id_ticketPlatform: "",
    url: "",
  });

  const [ticketPlatform, setTicketPlatform] = useState("");

  const router = useRouter();

  const getAllRequirement = async () => {
    const dataLocation = await fetchWrapper.get(`../api/location`);
    const dataGenre = await fetchWrapper.get(`../api/genre`);
    const dataTheme = await fetchWrapper.get(`../api/theme`);
    if (dataLocation && dataGenre && dataTheme) {
      setLocationArray(dataLocation.data);
      setGenreArray(dataGenre.data);
      setThemeArray(dataTheme.data);
    }
  };

  const getAllFile = async () => {
    const data = await fetchWrapper.get(`../api/file-film?id=${id_film}`);
    if (data) {
      setFileArray(data.data);
    }
  };

  const getAllTicket = async () => {
    const data = await fetchWrapper.get(`../api/ticket-film?id=${id_film}`);
    if (data) {
      setTicketArray(data.data);
    }
  };

  const getAllTicketPlatform = async () => {
    const dataTicketRequest = await fetchWrapper.get(`../api/ticket-platform`);
    if (dataTicketRequest) {
      let dataTicketObj = dataTicketRequest.data;
      let first = dataTicketObj[0];
      setTicketPlatformArray(dataTicketRequest.data);
      setTicketPlatform(first.name_ticket);
      setDataTicket({
        ...dataTicket,
        id_ticketPlatform: first.id,
      });
    }
  };

  const deleteData = async (id) => {
    Swal.fire({
      title: `Apakah anda yakin ingin menghapus data ini?`,
      text: "Anda tidak dapat mengembalikan data yang sudah hilang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteThis = async (id) => {
          try {
            const response = await fetch(`../api/film?id=${id}`, {
              method: "DELETE",
            });
            const data = await response.json();
            if (data) {
              if (data.statusCode != 200) {
                Swal.fire("FAILED", `Data gagal dihapus`, "error");
              } else {
                await Swal.fire("OK", `Data berhasil dihapus`, "success");
                router.reload(window.location.pathname);
              }
            }
          } catch (error) {
            Swal.fire("FAILED", "Data gagal di proses", "error");
          }
        };
        deleteThis(id);
      }
    });
  };

  const updateData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/film`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", `Data gagal diupdate`, "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", `Data berhasil diupdate`, "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  const addFile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/file-film`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFile),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  const addTicket = async () => {
    setLoading(true);
    console.log(dataTicket);
    try {
      const response = await fetch(`../api/ticket-film`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataTicket),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllRequirement();
    getAllFile();
    getAllTicketPlatform();
    getAllTicket();
  }, []);

  return (
    <>
      <Card className="mb-2">
        <div className="py-3 px-2">
          <Row className="align-items-center">
            <Col>
              <h4 className="mb-0">{title}</h4>
            </Col>
            <Button
              className="m-1 border-0 py-1 px-3"
              style={{
                color: "#ffffff",
                backgroundColor: "#697aa3",
                borderRadius: "5px",
                fontSize: "10px",
              }}
              type="button"
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            >
              <span>Update</span>
            </Button>
            <Button
              className="m-1 border-0 py-1 px-3"
              style={{
                color: "#ffffff",
                backgroundColor: "#cc0000",
                borderRadius: "5px",
                fontSize: "10px",
              }}
              type="button"
              onClick={() => {
                deleteData(id_film);
              }}
            >
              <span>Delete</span>
            </Button>
          </Row>
          <Row className="align-items-center mt-2">
            <Col>
              <span className="mb-0">File Gambar atau Video</span>
            </Col>
            <Button
              className="m-1 border-0 py-1 px-3"
              style={{
                color: "#ffffff",
                backgroundColor: "#FE7900",
                borderRadius: "5px",
                fontSize: "10px",
              }}
              type="button"
              onClick={() => {
                setModalOpenFile(!modalOpenFile);
              }}
            >
              <span>Add</span>
            </Button>
          </Row>
          {fileArray.map((val) => {
            return <CardFileFilm id={val.id} url={val.urlOrigin} />;
          })}
          <Row className="align-items-center mt-2">
            <Col>
              <span className="mb-0">Ticket Outlet Link</span>
            </Col>
            <Button
              className="m-1 border-0 py-1 px-3"
              style={{
                color: "#ffffff",
                backgroundColor: "#FE7900",
                borderRadius: "5px",
                fontSize: "10px",
              }}
              type="button"
              onClick={() => {
                setModalOpenTicket(!modalOpenTicket);
              }}
            >
              <span>Add</span>
            </Button>
          </Row>
          {ticketArray.map((val) => {
            return <CardTicketFilm id={val.id} url={val.url} />;
          })}
        </div>
      </Card>

      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
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
          <h3 className="m-0 mb-3 p-0">Update Film</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Judul Film</h5>
                <Input
                  type="text"
                  defaultValue={`${newData.title}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Row>
            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Location:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.location}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {locationArray.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              location: val.name_location,
                            });
                            setNewData({
                              ...newData,
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

            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Genre:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.genre}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {genreArray.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              genre: val.name_genre,
                            });
                            setNewData({
                              ...newData,
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

            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Theme:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.theme}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {themeArray.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              theme: val.name_theme,
                            });
                            setNewData({
                              ...newData,
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

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Durasi Film (ex: 01:23:00)</h5>
                <Input
                  type="text"
                  defaultValue={`${newData.duration}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      duration: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Deskripsi atau Sinopsis Film</h5>
                <Input
                  type="text"
                  defaultValue={`${newData.description}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      description: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">
                  Tanggal Tayang (ex: Kamis-4 September 2022-17:30)
                </h5>
                <Input
                  type="text"
                  defaultValue={`${newData.date_playing}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      date_playing: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Image Google Drive Poster</h5>
                <Input
                  type="text"
                  defaultValue={`${newData.poster_image}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      poster_image: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Image Google Drive Cover</h5>
                <Input
                  type="text"
                  defaultValue={`${newData.cover_image}`}
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      cover_image: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              updateData();
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenFile(!modalOpenFile)}
        isOpen={modalOpenFile}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenFile(false);
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
          <h3 className="m-0 mb-3 p-0">Add File on Film {`${title}`}</h3>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL File Google Drive</h5>
                <Input
                  type="text"
                  defaultValue={`${dataFile.url}`}
                  onChange={(e) => {
                    setDataFile({
                      ...dataFile,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Type File (images or video)</h5>
                <Input
                  type="text"
                  defaultValue={`${dataFile.type}`}
                  onChange={(e) => {
                    setDataFile({
                      ...dataFile,
                      type: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              addFile();
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenTicket(!modalOpenTicket)}
        isOpen={modalOpenTicket}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenTicket(false);
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
          <h3 className="m-0 mb-3 p-0">Add Ticket on Film {`${title}`}</h3>

          <Row>
            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Ticket Platform:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {ticketPlatform}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {ticketPlatformArray.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setDataTicket({
                              ...dataTicket,
                              id_ticketPlatform: val.id,
                            });
                            setTicketPlatform(val.name_ticket);
                          }}
                        >
                          <span>{val.name_ticket}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>
          </Row>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Ticket</h5>
                <Input
                  type="text"
                  defaultValue={`${dataTicket.url}`}
                  onChange={(e) => {
                    setDataTicket({
                      ...dataTicket,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              addTicket();
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Add</>
            )}
          </Button>
        </div>
      </Modal>
    </>
  );
}

CardFilms.propTypes = {
  id_film: PropTypes.any,
  title: PropTypes.any,
  duration: PropTypes.any,
  id_theme: PropTypes.any,
  id_genre: PropTypes.any,
  id_location: PropTypes.any,
  description: PropTypes.any,
  date_playing: PropTypes.any,
  poster_image: PropTypes.any,
  cover_image: PropTypes.any,
  theme: PropTypes.any,
  genre: PropTypes.any,
  location: PropTypes.any,
};

export default CardFilms;
