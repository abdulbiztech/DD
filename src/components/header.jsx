import React from "react";
import "./header.css"; // Your main app styles
import logo from "../assets/img/white_logo.png";

const App = () => {
  return (
    <div className="container-fluid p-0 welcome-header">
      <header className="text-center py-3 header text-white">
        <h2 className="custom-header">HELLO EVERYONE!!!!!!</h2>
        <h2 className="custom-header2">WELCOME TO</h2>
        <div className="logo-container">
          <span className="text-digital">DIGITAL</span>
          <img src={logo} alt="Digital Dammish Logo" className="custom-logo" />
          <span className="text-dammish">DAMMISH</span>
        </div>
      </header>
    </div>
  );
};

export default App;
