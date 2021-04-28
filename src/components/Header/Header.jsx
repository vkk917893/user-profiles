import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Navbar.Brand>Users</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push("/")}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="outline-warning"
            onClick={() => history.push("/addUser")}
          >
            Add User
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
