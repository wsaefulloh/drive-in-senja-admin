import React, { useState } from "react";
import Router, { useRouter } from "next/router";
// core components
import HomeFooter from "components/Footers/HomeFooter.js";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Spinner,
} from "reactstrap";

import ReactDatetime from "react-datetime";

import Swal from "sweetalert2";
import Link from "next/link";

function Register() {
  const [loading, setLoading] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [nameParticipant, setNameParticipant] = useState({
    firstName: "",
    lastName: "",
  });
  const [dateOfBirthParticipant, setDateOfBirthParticipant] = useState("");
  const [valid, setValid] = useState(false);
  const [citizenshipParticipant, setCitizenshipParticipant] = useState("");
  const [phoneParticipant, setPhoneParticipant] = useState("");
  const [emailParticipant, setEmailParticipant] = useState("");
  const [addressParticipant, setAddressParticipant] = useState({
    detail: "",
    namaJalan: "",
    keterangan: "",
    kota: "",
    provinsi: "",
    kodepos: "",
    negara: "",
  });

  const [titleFilm, setTitleFilm] = useState("");
  const [productionCountryFilm, setProductionCountryFilm] = useState("");
  const [yearOfProductionFilm, setYearOfProductionFilm] = useState("");
  const [typeOfFilm, setTypeOfFilm] = useState("");
  const [premiereStatusFilm, setPremiereStatusFilm] = useState("");
  const [previousFestivalFilm, setPreviousFestivalFilm] = useState("");
  const [prizesWonFilm, setPrizesWonFilm] = useState("");
  const [synopsisFilm, setSynopsisFilm] = useState("");

  const [productionCompany, setProductionCompany] = useState("");
  const [addressProductionCompany, setAddressProductionCompany] = useState({
    detail: "",
    namaJalan: "",
    keterangan: "",
    kota: "",
    provinsi: "",
    kodepos: "",
    negara: "",
  });
  const [emailProductionCompany, setEmailProductionCompany] = useState("");
  const [haveSalesIndonesia, setHaveSalesIndonesia] = useState();
  const [allowDISDistIndoneisa, setAllowDISDistIndoneisa] = useState();

  const [directorFilm, setDirectorFilm] = useState("");
  const [producersFilm, setProducersFilm] = useState("");
  const [screenWriterFilm, setScreenWriterFilm] = useState("");
  const [cinematographerFilm, setCinematographerFilm] = useState("");
  const [editorFilm, setEditorFilm] = useState("");
  const [mainCastFilm, setMainCastFilm] = useState("");

  const [urlImagesDirector, setUrlImagesDirector] = useState("");
  const [shortBioDirector, setShortBioDirector] = useState("");
  const [runningTimeFilm, setRunningTimeFilm] = useState("");
  const [shootingFormatFilm, setShootingFormatFilm] = useState("");
  const [screenFormatFilm, setScreenFormatFilm] = useState("");
  const [screenRatioFilm, setScreenRatioFilm] = useState("");
  const [frameRateFilm, setFrameRateFilm] = useState("");
  const [soundFilm, setSoundFilm] = useState("");
  const [originalLanguageFilm, setOriginalLanguageFilm] = useState("");
  const [languageSubtitleFilm, setLanguageSubtitleFilm] = useState("");
  const [urlPreviewFilm, setUrlPreviewFilm] = useState("");
  const [passwordUrlPreview, setPasswordUrlPreview] = useState("");
  const [urlStillPhotoFilm, setUrlStillPhotoFilm] = useState("");
  const [urlPosterFilm, setUrlPosterFilm] = useState("");
  const [urlSubtitleFilm, setUrlSubtitleFilm] = useState("");
  const [urlTrailer, setUrlTrailer] = useState("");

  const [aggrementScreeningPrograms, setAggrementScreeningPrograms] =
    useState();
  const [aggrementJAFFCopy, setAggrementJAFFCopy] = useState();
  const [aggrementFilmToParticipate, setAggrementFilmToParticipate] = useState({
    firstStatement: false,
    secondStatement: false,
  });

  const sendData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/film-festival/add-filmsubmission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_short_movie: isShortMovie,
          finalist: false,
          name_participant: `${nameParticipant.firstName} ${nameParticipant.lastName}`,
          date_of_bird_participant: dateOfBirthParticipant,
          citizenship_participant: citizenshipParticipant,
          phone_participant: phoneParticipant,
          email_participant: emailParticipant,
          address_participant: `${addressParticipant.detail} // ${addressParticipant.keterangan} // ${addressParticipant.namaJalan} // ${addressParticipant.kota} // ${addressParticipant.provinsi} // ${addressParticipant.kodepos} // ${addressParticipant.negara} `,
          title_film: titleFilm,
          production_country_film: productionCountryFilm,
          year_of_production_film: yearOfProductionFilm,
          type_of_film: typeOfFilm,
          premiere_status_film: premiereStatusFilm,
          previous_festival_film: previousFestivalFilm,
          prizes_won_film: prizesWonFilm,
          synopsis_film: synopsisFilm,
          production_company: productionCompany,
          address_production_company: `${addressProductionCompany.detail} // ${addressProductionCompany.keterangan} // ${addressProductionCompany.namaJalan} // ${addressProductionCompany.kota} // ${addressProductionCompany.provinsi} // ${addressProductionCompany.kodepos} // ${addressProductionCompany.negara} `,
          email_production_company: emailProductionCompany,
          have_sales_indonesia: haveSalesIndonesia,
          allow_dis_dist_indonesia: allowDISDistIndoneisa,
          director_film: directorFilm,
          producers_film: producersFilm,
          screenwriter_film: screenWriterFilm,
          cinematographer_film: cinematographerFilm,
          editor_film: editorFilm,
          main_cast_film: mainCastFilm,
          url_images_director: urlImagesDirector,
          short_bio_director: shortBioDirector,
          running_time_film: runningTimeFilm,
          shooting_format_film: shootingFormatFilm,
          screen_format_film: screenFormatFilm,
          screen_ratio_film: screenRatioFilm,
          frame_rate_film: frameRateFilm,
          sound_film: soundFilm,
          original_language_film: originalLanguageFilm,
          language_subtitle_film: languageSubtitleFilm,
          url_preview_film: urlPreviewFilm,
          password_url_preview: passwordUrlPreview,
          url_still_photo_film: urlStillPhotoFilm,
          url_poster_film: urlPosterFilm,
          url_subtitle_film: urlSubtitleFilm,
          url_trailer: urlTrailer,
          agreement_screening_programs: aggrementScreeningPrograms,
          agreement_jaff_copy: aggrementJAFFCopy,
          agreement_film_to_participate:
            aggrementFilmToParticipate.firstStatement == true &&
            aggrementFilmToParticipate.secondStatement == true
              ? true
              : null,
        }),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          Swal.fire("OK", "Data berhasil masuk", "success");
          Router.push("/");
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-content" style={{ backgroundColor: "#FFF0F0" }}>
        <Container className="pt-4">
          <Col>
            <div>
              <Link href="/">
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  style={{ height: "50px", cursor: "pointer" }}
                />
              </Link>
            </div>
          </Col>
        </Container>

        <Container className="pt-4">
          <Col>
            <h1>Kirimkan Karyamu</h1>
          </Col>
        </Container>

        <Container>
          <Row className="m-0 p-0 pt-1 pb-2">
            <Col lg="6" style={{ paddingLeft: "7.5px" }} className="pt-1 pb-1">
              <div className="text-justify" style={{ color: "#000000" }}>
                <span className="text-justify">
                  Drive-In Senja Film Festival adalah festival film tematik
                  tahunan yang diadakan oleh Drive-In Senja. Drive-In Senja Film
                  Festival berkomitmen untuk mengakselerasi para sineas baik
                  dalam berkarya maupun berjejaring. Yuk kirimkan karyamu
                  sekarang!
                </span>
              </div>
            </Col>
            <Col className="pt-1">
              <Row className="m-0 p-0 align-items-center">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/fa-solid_search.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Karyamu akan ditinjau terlebih dahulu oleh tim Drive-In
                      Senja
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="m-0 p-0 align-items-center pt-1">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/eva_email-outline.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Setelah karyamu ditinjau dan diterima, kami akan
                      menghubungi kamu
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="m-0 p-0 align-items-center pt-1">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/akar-icons_clock.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Peninjauan karya akan berlangsung maksimal 7x24 jam
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="pt-4">
          <Col>
            <Card className="p-4">
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="isFilmPendek"
                    type="checkbox"
                    checked={isShortMovie}
                    onChange={() => {
                      setIsShortMovie(!isShortMovie);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isFilmPendek"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      placeholder="First Name"
                      id="first-name-participant"
                      type="text"
                      valid={nameParticipant.firstName.length != 0}
                      invalid={nameParticipant.firstName.length == 0}
                      onChange={(e) => {
                        setNameParticipant({
                          ...nameParticipant,
                          firstName: e.target.value,
                        });
                      }}
                    />
                    {/* <label
                      className="form-control-label"
                      htmlFor="first-name-participant"
                      style={{ fontSize: "10px" }}
                    >
                      First name
                    </label> */}
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <Input
                      placeholder="Last Name"
                      id="last-name-participant"
                      type="text"
                      valid={nameParticipant.lastName.length != 0}
                      invalid={nameParticipant.lastName.length == 0}
                      onChange={(e) => {
                        setNameParticipant({
                          ...nameParticipant,
                          lastName: e.target.value,
                        });
                      }}
                    />
                    {/* <label
                      className="form-control-label"
                      htmlFor="last-name-participant"
                      style={{ fontSize: "10px" }}
                    >
                      Last name
                    </label> */}
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tanggal Lahir</h4>

                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      placeholder="DD/MM/YYYY"
                      id="date-of-birth"
                      type="text"
                      valid={
                        dateOfBirthParticipant.length == 10 &&
                        dateOfBirthParticipant[2] == "/" &&
                        dateOfBirthParticipant[5] == "/"
                      }
                      invalid={
                        dateOfBirthParticipant.length != 10 ||
                        dateOfBirthParticipant[2] != "/" ||
                        dateOfBirthParticipant[5] != "/"
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setDateOfBirthParticipant(e.target.value);
                        if (
                          target.length == 10 &&
                          target[2] == "/" &&
                          target[5] == "/"
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan format DD/MM/YYYY
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Kewarganegaraan</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      id="form-kewarganegaaran"
                      placeholder="Negara"
                      type="text"
                      valid={citizenshipParticipant.length != 0}
                      invalid={citizenshipParticipant.length == 0}
                      onChange={(e) => {
                        setCitizenshipParticipant(e.target.value);
                      }}
                    />
                    {/* <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label> */}
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">No. Telepon</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      placeholder="08XXXXXXXXXX"
                      id="form-phone"
                      type="text"
                      valid={
                        phoneParticipant.length >= 9 &&
                        Number.isInteger(Number(phoneParticipant))
                      }
                      invalid={
                        phoneParticipant.length < 9 ||
                        !Number.isInteger(Number(phoneParticipant))
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setPhoneParticipant(e.target.value);
                        if (
                          target.length >= 9 &&
                          Number.isInteger(Number(target))
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    {/* <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label> */}
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Nomor Telepon tidak Valid
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="form-email"
                      type="email"
                      valid={
                        emailParticipant.length != 0 &&
                        emailParticipant.includes("@") &&
                        emailParticipant.includes(".")
                      }
                      invalid={
                        emailParticipant.length == 0 ||
                        emailParticipant.includes("@") != true ||
                        emailParticipant.includes(".") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setEmailParticipant(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("@") &&
                          target.includes(".")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    {/* <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label> */}
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Email tidak Valid
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={addressParticipant.detail.length != 0}
                      invalid={addressParticipant.detail.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          detail: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.namaJalan.length != 0}
                      invalid={addressParticipant.namaJalan.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          namaJalan: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.keterangan.length != 0}
                      invalid={addressParticipant.keterangan.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          keterangan: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.kota.length != 0}
                      invalid={addressParticipant.kota.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          kota: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.provinsi.length != 0}
                      invalid={addressParticipant.provinsi.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          provinsi: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.kodepos.length != 0}
                      invalid={addressParticipant.kodepos.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          kodepos: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      type="text"
                      valid={addressParticipant.negara.length != 0}
                      invalid={addressParticipant.negara.length == 0}
                      onChange={(e) => {
                        setAddressParticipant({
                          ...addressParticipant,
                          negara: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">FILM</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Judul</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={titleFilm.length != 0}
                      invalid={titleFilm.length == 0}
                      onChange={(e) => {
                        setTitleFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Negara Tempat Produksi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={productionCountryFilm.length != 0}
                      invalid={productionCountryFilm.length == 0}
                      onChange={(e) => {
                        setProductionCountryFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tahun Produksi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={yearOfProductionFilm.length != 0}
                      invalid={yearOfProductionFilm.length == 0}
                      onChange={(e) => {
                        setYearOfProductionFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tipe Film</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_narasi"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "narasi" ? true : false}
                    onChange={() => {
                      setTypeOfFilm("narasi");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_narasi"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Narasi
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_dokumenter"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "dokumenter" ? true : false}
                    onChange={() => {
                      setTypeOfFilm("dokumenter");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_dokumenter"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Dokumenter
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_animasi"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "animasi" ? true : false}
                    onChange={() => {
                      setTypeOfFilm("animasi");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_animasi"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Animasi
                    </span>
                  </label>
                </Col>
              </div>
              <div className="d-flex align-items-center mt-3 pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Status Premier</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={premiereStatusFilm.length != 0}
                      invalid={premiereStatusFilm.length == 0}
                      onChange={(e) => {
                        setPremiereStatusFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Festival film yang pernah diikuti
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Isi dengan (-) jika karya kamu belum pernah diikutkan
                      dalam festival film manapun
                    </label>
                    <Input
                      type="textarea"
                      valid={previousFestivalFilm.length != 0}
                      invalid={previousFestivalFilm.length == 0}
                      onChange={(e) => {
                        setPreviousFestivalFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Penghargaan (jika ada) yang pernah dimenangkan
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Isi dengan (-) jika tidak ada penghargaan yang dimenangkan
                    </label>
                    <Input
                      type="textarea"
                      valid={prizesWonFilm.length != 0}
                      invalid={prizesWonFilm.length == 0}
                      onChange={(e) => {
                        setPrizesWonFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinopsis</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="textarea"
                      valid={synopsisFilm.length != 0}
                      invalid={synopsisFilm.length == 0}
                      onChange={(e) => {
                        setSynopsisFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={productionCompany.length != 0}
                      invalid={productionCompany.length == 0}
                      onChange={(e) => {
                        setProductionCompany(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={addressProductionCompany.detail.length != 0}
                      invalid={addressProductionCompany.detail.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          detail: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.namaJalan.length != 0}
                      invalid={addressProductionCompany.namaJalan.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          namaJalan: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.keterangan.length != 0}
                      invalid={addressProductionCompany.keterangan.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          keterangan: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.kota.length != 0}
                      invalid={addressProductionCompany.kota.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          kota: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.provinsi.length != 0}
                      invalid={addressProductionCompany.provinsi.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          provinsi: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.kodepos.length != 0}
                      invalid={addressProductionCompany.kodepos.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          kodepos: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      type="text"
                      valid={addressProductionCompany.negara.length != 0}
                      invalid={addressProductionCompany.negara.length == 0}
                      onChange={(e) => {
                        setAddressProductionCompany({
                          ...addressProductionCompany,
                          negara: e.target.value,
                        });
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="form-email"
                      type="email"
                      valid={
                        emailProductionCompany.length != 0 &&
                        emailProductionCompany.includes("@") &&
                        emailProductionCompany.includes(".")
                      }
                      invalid={
                        emailProductionCompany.length == 0 ||
                        emailProductionCompany.includes("@") != true ||
                        emailProductionCompany.includes(".") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setEmailProductionCompany(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("@") &&
                          target.includes(".")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Email tidak Valid
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu punya agen promosi di Indonesia?
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_true"
                    type="radio"
                    name="agen"
                    checked={haveSalesIndonesia == true ? true : false}
                    onChange={() => {
                      setHaveSalesIndonesia(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_false"
                    type="radio"
                    name="agen"
                    checked={haveSalesIndonesia == false ? true : false}
                    onChange={() => {
                      setHaveSalesIndonesia(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu mengizinkan Drive-In Senja untuk mendistribusikan
                  film kamu?
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_trueAllow"
                    type="radio"
                    name="agenAllow"
                    checked={allowDISDistIndoneisa == true ? true : false}
                    onChange={() => {
                      setAllowDISDistIndoneisa(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_trueAllow"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_falseAllow"
                    type="radio"
                    name="agenAllow"
                    checked={allowDISDistIndoneisa == false ? true : false}
                    onChange={() => {
                      setAllowDISDistIndoneisa(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_falseAllow"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sutradara</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={directorFilm.length != 0}
                      invalid={directorFilm.length == 0}
                      onChange={(e) => {
                        setDirectorFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika sutradara lebih dari
                      satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Produser</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={producersFilm.length != 0}
                      invalid={producersFilm.length == 0}
                      onChange={(e) => {
                        setProducersFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika produser lebih dari
                      satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Penulis Naskah</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={screenWriterFilm.length != 0}
                      invalid={screenWriterFilm.length == 0}
                      onChange={(e) => {
                        setScreenWriterFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika penulis naskah lebih
                      dari satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinematografer</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={cinematographerFilm.length != 0}
                      invalid={cinematographerFilm.length == 0}
                      onChange={(e) => {
                        setCinematographerFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika sinematografer lebih
                      dari satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Editor</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={editorFilm.length != 0}
                      invalid={editorFilm.length == 0}
                      onChange={(e) => {
                        setEditorFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika editor lebih dari satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Pemain</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={mainCastFilm.length != 0}
                      invalid={mainCastFilm.length == 0}
                      onChange={(e) => {
                        setMainCastFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika pemain lebih dari satu
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Foto Sutradara - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={urlImagesDirector.length != 0}
                      invalid={urlImagesDirector.length == 0}
                      onChange={(e) => {
                        setUrlImagesDirector(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Biografi singkat Sutradara</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={shortBioDirector.length != 0}
                      invalid={shortBioDirector.length == 0}
                      onChange={(e) => {
                        setShortBioDirector(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">TECHNICAL FEATURE</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Durasi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={runningTimeFilm.length != 0}
                      invalid={runningTimeFilm.length == 0}
                      onChange={(e) => {
                        setRunningTimeFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      style={{ fontSize: "10px" }}
                    >
                      ex: 01:45
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Shooting Format</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={shootingFormatFilm.length != 0}
                      invalid={shootingFormatFilm.length == 0}
                      onChange={(e) => {
                        setShootingFormatFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: HDcam/HDV/16mm/35mm etc
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Screening Format</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={screenFormatFilm.length != 0}
                      invalid={screenFormatFilm.length == 0}
                      onChange={(e) => {
                        setScreenFormatFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      style={{ fontSize: "10px" }}
                    >
                      ex: DCP/BluRay/DVD/Quicktime
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Rasio Layar</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={screenRatioFilm.length != 0}
                      invalid={screenRatioFilm.length == 0}
                      onChange={(e) => {
                        setScreenRatioFilm(e.target.value);
                      }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: 1.37/1.66/2.35
                    </label>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Frame Rate</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_24fps"
                    type="radio"
                    name="type-framerate"
                    checked={frameRateFilm == "24fps" ? true : false}
                    onChange={() => {
                      setFrameRateFilm("24fps");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_24fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      24fps
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_25fps"
                    type="radio"
                    name="type-framerate"
                    checked={frameRateFilm == "25fps" ? true : false}
                    onChange={() => {
                      setFrameRateFilm("25fps");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_25fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      25fps
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_custom"
                    type="radio"
                    name="type-framerate"
                    checked={
                      frameRateFilm != "24fps" && frameRateFilm != "25fps"
                        ? true
                        : false
                    }
                    onChange={() => {
                      setFrameRateFilm("");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_24fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Lainnya
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="type_custom"
                      type="text"
                      placeholder={`${frameRateFilm}`}
                      onChange={(e) => {
                        setFrameRateFilm(e.target.value);
                      }}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sound</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_mono"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Mono" ? true : false}
                    onChange={() => {
                      setSoundFilm("Mono");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_mono"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Mono
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_stereo"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Stereo" ? true : false}
                    onChange={() => {
                      setSoundFilm("Stereo");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_stereo"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Stereo
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_silent"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Silent" ? true : false}
                    onChange={() => {
                      setSoundFilm("Silent");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_silent"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Silent
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_customSound"
                    type="radio"
                    name="type-sound"
                    checked={
                      soundFilm != "Stereo" &&
                      soundFilm != "Mono" &&
                      soundFilm != "Silent"
                        ? true
                        : false
                    }
                    onChange={() => {
                      setSoundFilm("");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_customSound"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Lainnya
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="type_custom"
                      type="text"
                      placeholder={`${soundFilm}`}
                      onChange={(e) => {
                        setSoundFilm(e.target.value);
                      }}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Bahasa</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={originalLanguageFilm.length != 0}
                      invalid={originalLanguageFilm.length == 0}
                      onChange={(e) => {
                        setOriginalLanguageFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Language of Subtitles</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={languageSubtitleFilm.length != 0}
                      invalid={languageSubtitleFilm.length == 0}
                      onChange={(e) => {
                        setLanguageSubtitleFilm(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Video for Preview</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      placeholder="https://"
                      valid={
                        urlPreviewFilm.length != 0 &&
                        urlPreviewFilm.includes("drive.google.com")
                      }
                      invalid={
                        urlPreviewFilm.length == 0 ||
                        urlPreviewFilm.includes("drive.google.com") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setUrlPreviewFilm(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("drive.google.com")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan alamat Google Drive
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Password untuk URL VIdeo Peview (jika tidak ada, ketik '-')
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      valid={passwordUrlPreview.length != 0}
                      invalid={passwordUrlPreview.length == 0}
                      onChange={(e) => {
                        setPasswordUrlPreview(e.target.value);
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Dokumentasi - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      placeholder="https://"
                      valid={
                        urlStillPhotoFilm.length != 0 &&
                        urlStillPhotoFilm.includes("drive.google.com")
                      }
                      invalid={
                        urlStillPhotoFilm.length == 0 ||
                        urlStillPhotoFilm.includes("drive.google.com") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setUrlStillPhotoFilm(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("drive.google.com")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan alamat Google Drive
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Poster / Artwork - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      placeholder="https://"
                      valid={
                        urlPosterFilm.length != 0 &&
                        urlPosterFilm.includes("drive.google.com")
                      }
                      invalid={
                        urlPosterFilm.length == 0 ||
                        urlPosterFilm.includes("drive.google.com") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setUrlPosterFilm(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("drive.google.com")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan alamat Google Drive
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Subtitle File - Google Drive / Cloud Strorage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      placeholder="https://"
                      valid={
                        urlSubtitleFilm.length != 0 &&
                        urlSubtitleFilm.includes("drive.google.com")
                      }
                      invalid={
                        urlSubtitleFilm.length == 0 ||
                        urlSubtitleFilm.includes("drive.google.com") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setUrlSubtitleFilm(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("drive.google.com")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan alamat Google Drive
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Trailer</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      placeholder="https://"
                      valid={
                        urlTrailer.length != 0 &&
                        urlTrailer.includes("drive.google.com")
                      }
                      invalid={
                        urlTrailer.length == 0 ||
                        urlTrailer.includes("drive.google.com") != true
                      }
                      onChange={(e) => {
                        let target = e.target.value;
                        setUrlTrailer(e.target.value);
                        if (
                          target.length != 0 &&
                          target.includes("drive.google.com")
                        ) {
                          setValid(true);
                        } else {
                          setValid(false);
                        }
                      }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "10px" }}
                    >
                      Kolom harus terisi dengan alamat Google Drive
                    </div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PERSETUJUAN</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK BERPARTISIPASI DALAM PROGRAM LAYAR
                  NON-FESTIVAL{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Selain menyelenggarakan Drive-In Senja Film Festival, Komite
                Drive-In Senja juga mengadakan beberapa pemutaran non-festival
                yang bertujuan untuk mempromosikan film-film Asia dan mendidik
                masyarakat tentang perfilman. Saya memberikan izin kepada Komite
                Drive-In Senja untuk menggunakan salinan h264 atau MPEG-4 dari
                film tersebut dalam program pemutaran non-festival Drive-In
                Senja selama program tersebut diadakan untuk tujuan pendidikan
                dan bukan untuk tujuan komersial, dan bahwa Saya mendapat
                pemberitahuan setiap kali Komite akan menggunakan salinan film
                saya.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementScreening_true"
                    type="radio"
                    name="agreementScreening"
                    checked={aggrementScreeningPrograms == true ? true : false}
                    onChange={() => {
                      setAggrementScreeningPrograms(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementScreening_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementScreening_false"
                    type="radio"
                    name="agreementScreening"
                    checked={aggrementScreeningPrograms == false ? true : false}
                    onChange={() => {
                      setAggrementScreeningPrograms(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementScreening_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK MEMBERI IZIN KEPADA KOMITE DRIVE-IN SENJA
                  UNTUK MENJAGA SALINAN FILM{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Komite Drive-In Senja memiliki dan mengelola Drive-In Senja film
                library. Drive-In Senja film library ini dibangun sebagai bagian
                dari tugas tim Drive-In Senja untuk mengarsipkan film dan
                mengedukasi masyarakat Indonesia tentang perfilman. Saya
                memberikan izin kepada Komite Drive-In Senja untuk menyimpan
                salinan h264 atau MPEG-4 dari film tersebut di Drive-In Senja
                film library dan memberikan izin kepada Komite Drive-In Senja
                untuk menggunakannya untuk tujuan pendidikan dan bukan untuk
                tujuan komersial, dan bahwa saya mendapat pemberitahuan setiap
                kali tim Drive-In Senja akan menggunakan salinannya dalam
                acara-acara yang melibatkan publik.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementJFA_true"
                    type="radio"
                    name="agreementJFA"
                    checked={aggrementJAFFCopy == true ? true : false}
                    onChange={() => {
                      setAggrementJAFFCopy(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementJFA_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementJFA_false"
                    type="radio"
                    name="agreementJFA"
                    checked={aggrementJAFFCopy == false ? true : false}
                    onChange={() => {
                      setAggrementJAFFCopy(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementJFA_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PARTISIPASI DALAM FILM AGREEMENT{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>

              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="isAgreementFilmParticipant"
                    type="checkbox"
                    checked={aggrementFilmToParticipate.firstStatement}
                    onChange={() => {
                      setAggrementFilmToParticipate({
                        ...aggrementFilmToParticipate,
                        firstStatement:
                          !aggrementFilmToParticipate.firstStatement,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isAgreementFilmParticipant"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Saya telah membaca dan menerima syarat dan ketentuan yang
                      diuraikan dalam peraturan dan perundang-undangan.
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="isAgreementFilmParticipantSecond"
                    type="checkbox"
                    checked={aggrementFilmToParticipate.secondStatement}
                    onChange={() => {
                      setAggrementFilmToParticipate({
                        ...aggrementFilmToParticipate,
                        secondStatement:
                          !aggrementFilmToParticipate.secondStatement,
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isAgreementFilmParticipantSecond"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Saya setuju dengan perjanjian yang telah disampaikan
                    </span>
                  </label>
                </Col>
              </div>

              <Button
                color="secondary"
                style={{
                  color: "#000000",
                  backgroundColor: "#FE7900",
                  maxWidth: "150px",
                }}
                type="button"
                className="mt-4"
                disabled={!valid}
                onClick={() => {
                  sendData();
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
                  <>Kirim</>
                )}
              </Button>
            </Card>
          </Col>
        </Container>

        <HomeFooter />
      </div>
    </>
  );
}

export default Register;
