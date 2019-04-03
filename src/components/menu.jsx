import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {topNavClass: 'topnav'}
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  menuClickHanlder = () => {
    if (this.state.topNavClass === "topnav") {
      this.setState({topNavClass: "topnav responsive"})
    } else {
      this.setState({topNavClass: "topnav"})
    }
  }

  render() {
    return (
      <div className={ this.state.topNavClass }>
        <div className="dropdown">
          <button className="dropbtn">Remedies&nbsp;
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/acupuncture" onClick={this.menuClickHanlder}>Acupuncture</Link>
            <a href="#">Chinese Herbs</a>
            <Link to="/cupping" onClick={this.menuClickHanlder}>Cupping</Link>
          </div>
        </div>
        <a href="#news">Testimonials</a>
        <a href="#contact">Opening Hours</a>
        <a href="#about" className="active">About Our Doctor</a>
        <a href="#about">Contact Us</a>
        <a href="javascript:void(0);" className="icon" onClick={this.menuClickHanlder}>&#9776;</a>
      </div>
    )
  }
}

export default Menu
