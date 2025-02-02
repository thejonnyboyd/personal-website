import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Container, Card, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ paddingTop:"20px" }}>
      <header style={{ backgroundColor: "#faf6f4", padding: "10px 20px", borderRadius:"12px 12px 0 0", margin:"0 60px" }}>
        <Container fluid>
          <Header />
        </Container>
      </header>
      </div>
      <main style={{ backgroundColor: "#faf6f4", padding: "10px 20px", borderRadius:"0 0 12px 12px", margin:"0 60px", fontFamily:"Quicksand", fontWeight:"bold"}}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
