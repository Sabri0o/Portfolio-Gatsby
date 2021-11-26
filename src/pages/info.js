import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import downloadFile from "../../downloadResume/curriculum-vitae.pdf";

const imageStyle = {
  width: 200,
  height: 200,
  borderRadius: 200 / 2,
  borderStyle: "groove",
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const h2Style = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "44px",
  color: "#21243D",
};

const pStyle = {
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

const tab = {
  display: "inline-block",
  marginLeft: "20px",
};

export default function Info() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={8}>
          <h2 style={h2Style}>Hi, my name is Sabri,</h2>
          <h2 style={h2Style}>A motivated junior fullstack web developer,</h2>
          <p style={pStyle}>
            <span style={tab}></span>a problem solver and a quick thinker. I am
            dedicated to my own continuous self-development, I enjoy working
            closely with others and I am a detail-oriented person with a good
            methodology to overcome roadblocks. I am looking to work in a
            fast-paced and challenging environment where I can apply my
            knowledge.
          </p>
        </Col>
        <Col md={4} style={center}>
          <StaticImage
            alt="My profile photo"
            src="../images/myProfilePhoto.jpg"
            style={imageStyle}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
        <a href={downloadFile} download>
          <button style={buttonStyle}>Download Resume</button>
        </a>
      </Row>
    </Container>
  );
}
