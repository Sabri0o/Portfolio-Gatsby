import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import photo from "../images/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const imageStyle = {
  width: 200,
  height: 200,
  borderRadius: 200 / 2,
  borderStyle:"groove"
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  background: "#FF6464",
  borderRadius: "2px",

  fontFamily: "Heebo",
  fontStyle: "normal",
  fontweight: "500",
  fontSize: "20px",
  lineHeight: "29px",

  color: "#FFFFFF",
};

export default function Info() {
  return (
    <div style={{ padding: "50px" }}>
      <Row>
        <Col md={8}>
          <h2 style={h2}>Hi, I am John,</h2>
          <h2 style={h2}> Creative Technologist</h2>

          <p style={p}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Col>
        <Col md={4} style={center}>
          <Image src={photo} style={imageStyle} />
        </Col>
        <div style={{ marginTop: "20px" }}>
          <button style={buttonStyle}>Download Resume</button>
        </div>
      </Row>
    </div>
  );
}
