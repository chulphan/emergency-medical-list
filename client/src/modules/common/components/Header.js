import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="faded" light>
      <NavLink to="/">응급실 진료목록</NavLink>
    </Navbar>
  );
};

export default Header;
