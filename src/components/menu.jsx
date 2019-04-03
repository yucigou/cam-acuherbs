import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNavClass: 'topnav',
      activeMenu: ''
    }
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  menuToggler = () => {
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
            <i
              className="fa fa-caret-down"
              style={{color:(this.props.location.pathname === '/acupuncture' || this.props.location.pathname === '/chinese-herbs' || this.props.location.pathname === '/cupping') ? '#4CAF50' : ''}}
            ></i>
          </button>
          <div className="dropdown-content">
            <Link
              to="/acupuncture"
              onClick={this.menuToggler}
              className = {this.props.location.pathname === '/acupuncture' ? 'active' : ''}
            >
              Acupuncture
            </Link>
            <a href="#">Chinese Herbs</a>
            <Link
              to="/cupping"
              onClick={this.menuToggler}
              className = {this.props.location.pathname === '/cupping' ? 'active' : ''}
            >
              Cupping
            </Link>
          </div>
        </div>
        <a href="#news">Testimonials</a>
        <Link
          to="/opening-hours"
          onClick={this.menuToggler}
          className = {this.props.location.pathname === '/opening-hours' ? 'active' : ''}
        >
          Opening Hours
        </Link>
        <a href="#about">About Our Doctor</a>
        <a href="#about">Contact Us</a>
        <a href="javascript:void(0);" className="icon" onClick={this.menuToggler}>&#9776;</a>
      </div>
    )
  }
}

export default withRouter(Menu)
