import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";

const Landing2 = () => {
  return (
    <div>
      <section className="common-padding swiper-section">
        <Container>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img src={Card1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img src={Card2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img src={Card1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img src={Card2} />
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </Container>
      </section>
    </div>
  );
};

export default Landing2;
