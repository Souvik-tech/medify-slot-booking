import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Landing/Navbar";
import Heroform from "../Landing/Heroform";
import { AppContext } from "../Context/AppContext";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Verfied from "../images/verified.png";
import medical from "../images/div.u-pos-has.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { slots } from "./hospitalData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PageFooter from "./Footer";

const CustomSwiper = ({ children }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="slotBooking">
      <div className="divider"></div>
      <button
        ref={prevRef}
        className="slideBtn leftBtn"
        aria-label="Previous slide"
      >
        <svg
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
        >
          <path
            d="M3.02391 5.62068L7.14868 9.74552L5.97017 10.924L0.666831 5.62068L5.97017 0.317383L7.14868 1.4959L3.02391 5.62068Z"
            fill="#2AA7FF"
          />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="slideBtn rightBtn"
        aria-label="Next slide"
      >
        <svg
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.97584 5.61955L0.851074 1.49472L2.02958 0.316217L7.33292 5.61955L2.02958 10.9229L0.851074 9.74433L4.97584 5.61955Z"
            fill="#2AA7FF"
          ></path>
        </svg>
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true,
        }}
        className="px-4"
      >
        {children}
      </Swiper>
    </div>
  );
};

function TimePicker({ day, onClick }) {
  function handleClick(e) {
    onClick(e);
  }

  const [slot] = slots.filter((sl) => sl.day === day);

  if (slot.length === 0) return <></>;

  return (
    <Container>
      <Row>
        <Col md={2}>Morning</Col>
        {slot.morning.map((time) => (
          <Col key={slot.day + time.time} mod={2}>
            {time.avl ? (
              <div data-id={time.time} onClick={handleClick} className="time">
                {time.time}
              </div>
            ) : (
              <></>
            )}
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={2}>Afternoon</Col>
        {slot.morning.map((time) => (
          <Col key={slot.day + time.time} mod={2}>
            {time.avl ? (
              <div data-id={time.time} onClick={handleClick} className="time">
                {time.time}
              </div>
            ) : (
              <></>
            )}
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={2}>Evening</Col>
        {slot.morning.map((time) => (
          <Col key={slot.day + time.time} mod={2}>
            {time.avl ? (
              <div data-id={time.time} onClick={handleClick} className="time">
                {time.time}
              </div>
            ) : (
              <></>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
const HospitalCard = ({ hospital }) => {
  const [swipierVisibility, toggleSwipperVisibility] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const { setBookings } = useContext(AppContext);

  function handleSwipperVisibility() {
    toggleSwipperVisibility((prevState) => !prevState);
  }

  function handleDaySelect(day) {
    return () => {
      setSelectedDay(day);
    };
  }

  function handleAddBooking(selectedDay, hospital) {
    return (e) => {
      const time = e.target.dataset.id;
      setBookings((prevState) => [
        ...prevState,
        {
          hospital,
          date: selectedDay,
          time,
        },
      ]);
    };
  }

  return (
    <div className="card medicalCard">
      <Row style={{ gap: 28 }}>
        <Col md={2}>
          <img src={medical} alt="medical-icon" />
        </Col>
        <Col md={5}>
          <h5 className="hName">{hospital["Hospital Name"]}</h5>
          <h6>{hospital["Address"]}</h6>
          <p style={{ marginBottom: 0 }}>
            Smilessence Center for Advanced Dentistry + 1
          </p>
          <p style={{ marginBottom: 0 }}>more</p>
          <div className="likes">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgBnY5tDYAwDERXggAkIAEcIAkHZAoIDiYBCXPCHICDcpds//jsJS9bur61zj1EVScwuz/JErNbJCZaJGa86hM8dDhJymwvf7On54RQVgKtfstQOWMsYhKRaBG9dWK0iAFrJl5qsOYiCwdYQHMj+nI5AUF/eSye6k/XAAAAAElFTkSuQmCC"
              alt="like"
              style={{ margin: "5px" }}
            />
            4
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-end">
          <div>
            <p className="available">Available Today</p>
            <button onClick={handleSwipperVisibility} className="bookBtn">
              Book Free Center Visit
            </button>
          </div>
        </Col>
      </Row>
      <div className="slotBooking">
        {/* <div className="divider"></div> */}
        {swipierVisibility && (
          <>
            <CustomSwiper>
              {slots.map((slot) => (
                <SwiperSlide
                  onClick={handleDaySelect(slot.day)}
                  className="tab"
                  key={slot.day}
                >
                  {slot.day}
                  <p className="slotText">{slot.avl} slots available</p>
                </SwiperSlide>
              ))}
            </CustomSwiper>
            {selectedDay && (
              <TimePicker
                onClick={handleAddBooking(selectedDay, hospital)}
                day={selectedDay}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Hospitals = () => {
  const {
    stateVal,
    cityVal,
    setStateVal,
    setCityVal,
    centerData,
    setCenterData,
  } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <Heroform />
      <div className="centerListWrap">
        <Container>
          <h2 className="headerText">
            {centerData.length} medical centers available in {stateVal}
          </h2>
          <p className="notify">
            <img src={Verfied} style={{ width: 30 + "px" }} alt="checkbox" />
            Book appointments with minimum wait-time & verified doctor details
          </p>
          <Row>
            <Col md={8}>
              {centerData.map((val) => (
                <HospitalCard key={val["Phone Number"]} hospital={val} />
              ))}
            </Col>
          </Row>
        </Container>
        <PageFooter />
      </div>
    </div>
  );
};

export default Hospitals;
