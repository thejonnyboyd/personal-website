import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const style = ({ isActive }) => ({
    color: isActive ? "bold" : "normal",
  });

  return (
    <header>
      <Container>
        <Row className="align-items-center">
          <Col xs={8} md={2}>
            <Link to="/">
              <img
                href="/"
                src="https://res.cloudinary.com/dx8zsuesx/image/upload/v1738511805/JonnyBoydLogo_witumi.png"
                style={{
                  width: "180px",
                  height: "33.31",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Col>
          <Col>
            <Navbar
              bg="transparent"
              expand="lg"
              className="w-100"
              style={{ justifyContent: "center" }}
            >
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav
                  className="mx-auto"
                  style={{ fontWeight: "bold", gap: "1rem" }}
                >
                  <Nav.Link as={NavLink} to="/portfolio">
                    Portfolio
                  </Nav.Link>
                  <NavDropdown title="Content" id="content-dropdown">
                    <NavDropdown.Item as={NavLink} to="/writing">
                      Writing
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/youtube">
                      YouTube
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="About" id="about-dropdown">
                    <NavDropdown.Item as={NavLink} to="/about">
                      About Me
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/Gear">
                      Gear
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <NavLink to="/newsletter" className="nav-link">
                <Button
                  style={{
                    border: "none",
                    borderRadius: "20px",
                    backgroundColor: "lightsalmon",
                    color: "black",
                  }}
                >
                  Newsletter
                </Button>
              </NavLink>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
