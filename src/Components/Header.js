import React from "react";
import "../App.css";
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
              <Navbar.Toggle
                aria-controls="navbar-nav"
                className="custom-toggler"
              />
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
                    <NavDropdown.Item as={NavLink} to="/aboutme">
                      About Me
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/gear">
                      Gear
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <NavLink to="/newsletter" className="nav-link">
                  <Button className="subscribe-button">
                    Subscribe to the newsletter
                  </Button>
                </NavLink>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
