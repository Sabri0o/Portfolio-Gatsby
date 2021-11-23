import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import photo from "../images/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const imageStyle = {
  width: 150,
  height: 150,
  borderRadius: 150 / 2,
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
};

const h2 = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "44px",
  color: "#21243D",
};

const p = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "23px",
  color: "#21243D",
};

const buttonStyle = {
  width: "208px",
  height: "47px",
  left: "148px",
  top: "477px",
  background: "#FF6464",
  borderRadius: "2px",

  fontFamily: "Heebo",
  fontStyle: "normal",
  fontweight: "500",
  fontSize: "20px",
  lineHeight: "29px",

  color: "#FFFFFF",
};

// width: 208px;
// height: 47px;
// left: 148px;
// top: 477px;

// /* Primary */

// background: #FF6464;
// border-radius: 2px;

// width: 167px;
// height: 21px;
// left: 168px;
// top: 486px;

// font-family: Heebo;
// font-style: normal;
// font-weight: 500;
// font-size: 20px;
// line-height: 29px;

export default function Info() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={8}>
          <h2 style={h2}>Hi, I am John,</h2>
          <h2 style={h2}> Creative Technologist</h2>

          <p style={p}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button style={buttonStyle}>Download Resume</button>
        </Col>
        <Col md={4} style={center}>
          <Image src={photo} style={imageStyle} />
        </Col>
      </Row>
    </Container>
  );
}
