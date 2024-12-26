import React, { Children, createContext, useState, useEffect } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [stateVal, setStateVal] = useState(
    JSON.parse(localStorage.getItem("statename")) || ""
  );
  const [cityVal, setCityVal] = useState("");
  const [centerData, setCenterData] = useState(
    JSON.parse(localStorage.getItem("centerList")) || []
  );
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("myBookings")) || []
  );
  // Save `centerData` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("statename", JSON.stringify(stateVal));
    localStorage.setItem("centerList", JSON.stringify(centerData));
    console.log("dont run");
  }, [centerData]);

  useEffect(() => {
    localStorage.setItem("myBookings",JSON.stringify(bookings));
  }, [bookings])

  return (
    <AppContext.Provider
      value={{
        stateVal,
        cityVal,
        setStateVal,
        setCityVal,
        centerData,
        setCenterData,
        bookings,
        setBookings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
