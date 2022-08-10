import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Container, Row, Card } from "reactstrap";

// layout for this page
import HomeLayout from "layouts/Homepage.js";

import "../../assets/css/main/main.module.css";

import CardsEventDetails from "components/Cards/CardsEventsDetails.js";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Slider from "react-slick";

function EventsPromotions() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const [eventsPromotions, setEventsPromotions] = useState([]);

  const getEventsPromotions = async () => {
    const data = await fetchWrapper.get(`../api/events-promotions`);
    if (data) {
      setEventsPromotions(data.data);
    }
  };

  useEffect(() => {
    getEventsPromotions();
  }, []);

  return (
    <>
      <div
        className="p-0 m-0 background_event_promotion"
        style={{ maxWidth: "100%" }}
      >
        <div className="gradient__card__detail_film">
          <Container className="py-4">
            <Card
              className="m-0"
              style={{ boxShadow: "unset", backgroundColor: "transparent" }}
            >
              <Container className="pt-4">
                <div className="carousel-box">
                  <Slider
                    {...settings}
                    className="slider-playnow event-promotions"
                  >
                    {eventsPromotions.map((val) => {
                      return (
                        <CardsEventDetails
                          img={val.poster_image}
                          title={val.title}
                          desc={val.description}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </Container>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}

EventsPromotions.layout = HomeLayout;

export default EventsPromotions;
