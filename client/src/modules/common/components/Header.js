import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/">응급실 진료목록</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="#">게시판</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
