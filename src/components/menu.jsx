import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Menu = () => {
  return (
    <div className="topnav" id="myTopnav">
      <div className="dropdown">
        <button className="dropbtn">Remedies&nbsp;
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/acupuncture">Acupuncture</Link>
          <a href="#">Chinese Herbs</a>
          <Link to="/cupping">Cupping</Link>
        </div>
      </div>
      <a href="#news">Testimonials</a>
      <a href="#contact">Opening Hours</a>
      <a href="#about" className="active">About Our Doctor</a>
      <a href="#about">Contact Us</a>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
    </div>
  )
}

export default Menu
