import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiSearch } from "react-icons/ci";

import axios from "axios";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import HeroIcon from "./HeroIcon";

const Heroform = () => {
  const [statelist, setStatelist] = useState([]);
  const [selectstate, setSelectState] = useState("");
  const [citylist, setCitylist] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const navigate = useNavigate();

  const {
    stateVal,
    cityVal,
    setStateVal,
    setCityVal,
    centerData,
    setCenterData,
  } = useContext(AppContext);
  const hospitalRoute = (e) => {
    e.preventDefault();
    navigate("/hospitals");
    const centerList = async () => {
      try {
        const centerlistData = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${selectstate}&city=${selectCity}`
        );
        console.log(centerlistData.data);
        setStateVal(selectstate);
        setCenterData(centerlistData.data);
      } catch (error) {
        console.error("Error fetching Centers:", error);
      }
    };

    centerList();
  };
  useEffect(() => {
    const tempState = JSON.parse(localStorage.getItem("statename")) || "";
    const tempList = JSON.parse(localStorage.getItem("centerList")) || [];
    setCenterData(tempList);
    setStateVal(tempState);
  }, []);
  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStatelist(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStateData();
  }, []);
  useEffect(() => {
    if (statelist.length > 0 && selectstate) {
      const fetchCity = async () => {
        try {
          const responseCity = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectstate}`
          );
          setCitylist(responseCity.data);
          console.log(responseCity.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCity();
    }
  }, [selectstate, statelist]);

  const cityValList = () => {};

  return (
    <div className="hero-form">
      <Container>
        <div className="hero-form-data">
          <Row>
            <Col>
              <form className="landing-form">
                <div className="search-field">
                  <CiSearch />
                  <select
                    value={selectstate}
                    onChange={(e) => {
                      setSelectState(e.target.value);
                    }}
                  >
                    <option>State</option>
                    {statelist.map((val, index) => (
                      <option key={index}>{val}</option>
                    ))}
                  </select>
                </div>
                <div className="search-field">
                  <CiSearch />
                  <select
                    value={selectCity}
                    onChange={(e) => setSelectCity(e.target.value)}
                  >
                    <option>City</option>
                    {citylist.map((val, index) => (
                      <option key={index}>{val}</option>
                    ))}
                  </select>
                </div>
                <button className="main-button" onClick={hospitalRoute}>
                  <CiSearch />
                  Search
                </button>
              </form>
            </Col>
          </Row>
          <HeroIcon />
        </div>
      </Container>
    </div>
  );
};

export default Heroform;
