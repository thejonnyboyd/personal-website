import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Container, Card, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <Container className="card border-primary mb-12">
      <Row className="card border-primary mb-12">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Header />
          </Card.Body>
        </Card>
      </Row>
      
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
