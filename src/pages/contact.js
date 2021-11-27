import React from "react";
import Layout from "../components/layout";
const myStyle = {
  marginLeft: "100px",
  marginRight: "60px",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "23px",
  color: "#21243D",
};

export default function Contact() {
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px", marginTop: "100px" }}>Hi there ;)</h2>
      <div style={myStyle}>
        I'm a full stack JavaScript web developer from Tunisia. Looking forward
        to meet you!
      </div>
    </Layout>
  );
}
