import React, { useEffect, useState } from "react";
import Link from "next/link";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col, Modal } from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

function CardFilms(props) {
  let { img, id, title, genre, date } = props;

  let newDate = date.split("-");

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

  useEffect(() => {
    getTicketFilm();
  }, []);

  return (
    <>
      <Col>
        <Card
          style={{
            backgroundImage:
              "url(" +
              `https://drive.google.com/uc?export=view&id=${img}` +
              ")",
            height: "350px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <CardBody className="gradient__card__events d-flex align-items-end">
            <div className="w-100">
              <CardTitle className="mb-2" tag="h3" style={{ color: "#ffffff" }}>
                {title}
              </CardTitle>
              <div>{genre}</div>
              <div className="mb-3">{newDate[1]}</div>

              <div className="d-flex justify-content-center align-items-center">
                <Link href={`/film-details/${id}`}>
                  <Button
                    style={{
                      color: "#FE7900",
                      width: "100%",
                      backgroundColor: "#ffffff",
                    }}
                    type="button"
                    className="w-100 p-1"
                  >
                    Details
                  </Button>
                </Link>

                <Button
                  style={{
                    color: "#ffffff",
                    width: "100%",
                    backgroundColor: "#FE7900",
                  }}
                  type="button"
                  className="w-100 p-1"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Beli
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

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

CardFilms.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  id: PropTypes.any,
  genre: PropTypes.string,
  date: PropTypes.string,
};

export default CardFilms;
