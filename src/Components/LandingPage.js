import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row } from "react-bootstrap";

function LandingPage(){
    return (
        <Container>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Welcome to the Landing Page
                        </Card.Title>
                        <Card.Text>
                            This is the landing page of the application
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default LandingPage;