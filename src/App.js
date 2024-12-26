import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import Hospitals from "./Details/Hospitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MyBookings from "./Details/MyBookings";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/hospitals" element={<Hospitals />}/>
          <Route path="/myBookings" element={<MyBookings />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
