import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import img from "../images/imgCard.png";

const imageStyle = {
  width: "auto",
  height: "180px",
  borderRadius: "4px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
};

export default function WorkCardHome(props) {
  return (
    <div style={center}>
      <Row>
        <Col md={4} style={containerStyle}>
          <Image style={imageStyle} src={img} />
        </Col>
        <Col md={8} style={containerStyle}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
        <Row style={{ marginTop: "20px" }}>
          <hr style={{ border: "1px solid #E0E0E0" }} />
        </Row>
      </Row>
    </div>
  );
}

// border: 1px solid #E0E0E0;
