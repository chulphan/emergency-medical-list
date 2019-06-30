import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="faded" light>
      <NavLink to="/">응급실 진료목록</NavLink>
      <Nav>
        <NavItem>
          <NavLink to="/test">게시판</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
