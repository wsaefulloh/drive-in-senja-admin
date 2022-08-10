import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components

import CardsLocation from "components/Cards/CardsLocation.js";

import Slider from "react-slick";

import { fetchWrapper } from "../helpers/fetch-wrapper";

import "../assets/css/main/main.module.css";

function Locations() {
  const [location, setLocation] = useState([]);

  const getLocation = async () => {
    const data = await fetchWrapper.get(`api/get-location`);
    if (data) {
      setLocation(data.data);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      <Container className="py-4">
        <Card
          className="m-0"
          style={{ boxShadow: "unset", backgroundColor: "transparent" }}
        >
          <Container className="pt-4">
            <div className="carousel-box">
              <Slider {...settings} className="slider-playnow">
                {location.map((val) => {
                  return (
                    <CardsLocation
                      name={val.name_location}
                      frame={val.url_iframe}
                      url_maps={val.url_maps}
                      date={val.date_location}
                      detail={val.details_location}
                    />
                  );
                })}
              </Slider>
            </div>
          </Container>
        </Card>
      </Container>
    </>
  );
}

Locations.layout = HomeLayout;

export default Locations;
