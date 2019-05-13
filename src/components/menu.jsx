import React from 'react'
import { NavLink, withRouter } from "react-router-dom";

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
            <NavLink
              to="/acupuncture"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Acupuncture
            </NavLink>
            <NavLink
              to="/chinese-herbs"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Chinese Herbs
            </NavLink>
            <NavLink
              to="/cupping"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Cupping
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/testimonials"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/opening-hours"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          Opening Hours
        </NavLink>
        <NavLink
          to="/about-doctor"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          About Our Doctor
        </NavLink>
        <NavLink
          to="/contact"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          Contact Us
        </NavLink>
        <a href="javascript:void(0);" className="icon" onClick={this.menuToggler}>&#9776;</a>
      </div>
    )
  }
}

export default withRouter(Menu)
