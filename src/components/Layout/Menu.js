import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <Container className={classes.menu}>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/features">FEATURES</NavLink>
            <NavLink to="/About">ABOUT</NavLink>
          </Container>
        </Nav>
      </Navbar>
    </>
  );
};

export default Menu;
