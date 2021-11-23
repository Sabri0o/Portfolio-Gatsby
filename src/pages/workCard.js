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

const spacing = {
  margin: "15px",
};

const dateStyle = {
  width: "70",
  height: "20",
  background: "#142850",
  borderRadius: "16px",
  fontFamily:"Heebo",
  fontStyle:"normal",
  fontWeight:"900",
  fontSize:"18",
  lineHeight:"60px",
  color: "#FFFFFF",
  padding:'5px'
};



export default function WorkCard(props) {
  return (
    <div style={center}>
      <Row>
        <Col md={4} style={containerStyle}>
          <Image style={imageStyle} src={img} />
        </Col>
        <Col md={8} style={containerStyle}>
          <Card.Body>
            <Card.Title style={spacing}>Card Title</Card.Title>
            <Card.Subtitle style={spacing}>
              {<span style={dateStyle}>2021</span>}
              {` | `}
              {<span>project task</span>}
            </Card.Subtitle>
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
