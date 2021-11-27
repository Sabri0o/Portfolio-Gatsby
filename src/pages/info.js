import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import downloadFile from "../../downloadResume/curriculum-vitae.pdf";
import "../styles/info.css";

const imageStyle = {
  width: 200,
  height: 200,
  borderRadius: 200 / 2,
  borderStyle: "groove",
};

export default function Info() {
  return (
    <Container className="container">
      <Row className="rowContainer">
        <Col md={8}>
          <h2 className="h2Style">
            Hi, my name is Sabri,
            <br />A motivated junior fullstack web developer,
          </h2>

          <p className="pStyle">
            <span className="tab"></span>a problem solver and a quick thinker. I
            am dedicated to my own continuous self-development, I enjoy working
            closely with others and I am a detail-oriented person with a good
            methodology to overcome roadblocks. I am looking to work in a
            fast-paced and challenging environment where I can apply my
            knowledge.
          </p>
        </Col>
        <Col md={4} className="center">
          <StaticImage
            alt="My profile photo"
            src="../images/myProfilePhoto.jpg"
            style={imageStyle}
          />
        </Col>
      </Row>
      <Row className="buttonContainer">
        <button className="buttonStyle">
          <a
            href={downloadFile}
            download
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Download Resume
          </a>
        </button>
      </Row>
    </Container>
  );
}
