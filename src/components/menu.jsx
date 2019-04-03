import React from 'react'

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
          <a href="#">Acupuncture</a>
          <a href="#">Chinese Herbs</a>
          <a href="#">Cupping</a>
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
