import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col } from "react-bootstrap";

function LandingPage() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img
            src="https://res.cloudinary.com/dx8zsuesx/image/upload/v1738534203/MainPic_ubvxjv.png"
            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
          />
        </Col>
        <Col sm={6}>
          <Card
            style={{
              backgroundColor: "#faf6f4",
              border: "none",
              textAlign: "left",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "10vh",
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Hi{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  there!
                </span>
                <img
                  src="https://res.cloudinary.com/dx8zsuesx/image/upload/v1738535002/BlueUnderlines_jc4qc8.png"
                  alt="Underline"
                  style={{
                    position: "absolute",
                    bottom: "-65px",
                    left: "-100px",
                    width: "175%",
                    maxWidth: "400px",
                  }}
                />
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    margin: "40px 0",
                    fontSize: "35px",
                    textAlign: "left",
                    fontWeight: "575",
                    padding: "0 20px 0 0",
                  }}
                >
                  I'm Jonny. I'm a former teacher turned software developer, who
                  creates{" "}
                  <a
                    href="https://www.youtube.com/@JonnyBoyd"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    YouTube
                  </a>{" "}
                  videos, writes{" "}
                  <a
                    href="https://www.medium.com/@thejonnyboyd"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    Medium
                  </a>{" "}
                  articles and a{" "}
                  <a
                    href="https://www.medium.com/@thejonnyboyd"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    newsletter
                  </a>{" "}
                  in my spare time.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#faf6f4",
          padding: "10px 10px",
          borderRadius: "12px",
          margin: "0 60px",
        }}
      >
        <Col>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "left",
                  fontFamily: "sans-serif",
                  fontSize: "50px",
                }}
              >
                Subscribe to
                <br />
                <a style={{ fontFamily: "QuickSand", fontWeight: "bold" }}>
                  The Sunday Sprint
                </a>
              </Card.Title>
              <Card.Text style={{ textAlign: "right" }}>
                This is a card with some content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
