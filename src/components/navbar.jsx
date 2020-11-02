import React, { Component } from "react";
import Logo from "../images/logo1.png";
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="bg-dark fixed-top">
          {!this.props.user && (
            <React.Fragment>
              <NavbarBrand tag={Link} to="/">
                <img
                  src={Logo}
                  alt="sent-it"
                  style={{ width: "180px", height: "55px" }}
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/" tag={Link} className="text-light">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/register" tag={Link} className="text-light">
                      Register
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/login"
                      tag={Link}
                      className="btn text-light"
                      id="login"
                    >
                      Login
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </React.Fragment>
          )}
          {this.props.user && (
            <React.Fragment>
              <NavbarBrand tag={Link} to="/profile">
                <img
                  src={Logo}
                  alt="sent-it"
                  style={{ width: "180px", height: "55px" }}
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/profile" tag={Link} className="text-light">
                      {this.props.user.firstname.toUpperCase()}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/create-order" tag={Link} className="btn btn-secondary text-light mx-2">
                      Create Order
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/logout"
                      tag={Link}
                      className="btn btn-danger text-light"
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </React.Fragment>
          )}
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
