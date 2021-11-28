import React from "react";
import Layout from "../components/layout";
import { Container } from "react-bootstrap";
import "../styles/contact.css";

export default function Contact() {
  return (
    <Layout>
      <Container>
        <h2>Hi there ;)</h2>
        <div className="myStyle">
          I'm a full stack JavaScript web developer from Tunisia. Looking
          forward to meet you!
        </div>
      </Container>
    </Layout>
  );
}
