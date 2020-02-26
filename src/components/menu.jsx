import React from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNavClass: 'topnav',
      activeMenu: ''
    };
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  menuToggler = () => {
    if (this.state.topNavClass === 'topnav') {
      this.setState({ topNavClass: 'topnav responsive' });
    } else {
      this.setState({ topNavClass: 'topnav' });
    }
  };

  render() {
    return (
      <div className={this.state.topNavClass}>
        <div className="dropdown">
          <button className="dropbtn">
            Remedies&nbsp;
            <i
              className="fa fa-caret-down"
              style={{
                color:
                  globalHistory.location.pathname === '/acupuncture' ||
                  globalHistory.location.pathname === '/chinese-herbs' ||
                  globalHistory.location.pathname === '/cupping'
                    ? '#4CAF50'
                    : ''
              }}
            ></i>
          </button>
          <div className="dropdown-content">
            <Link
              to="/acupuncture"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Acupuncture
            </Link>
            <Link
              to="/chinese-herbs"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Chinese Herbs
            </Link>
            <Link
              to="/cupping"
              onClick={this.menuToggler}
              activeClassName="active"
            >
              Cupping
            </Link>
          </div>
        </div>
        <Link
          to="/testimonials"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          Testimonials
        </Link>
        <Link
          to="/opening-hours"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          Opening Hours
        </Link>
        <Link
          to="/about-doctor"
          onClick={this.menuToggler}
          activeClassName="active"
        >
          About Our Doctor
        </Link>
        <Link to="/contact" onClick={this.menuToggler} activeClassName="active">
          Contact Us
        </Link>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={this.menuToggler}
        >
          &#9776;
        </a>
      </div>
    );
  }
}

export default Menu;
