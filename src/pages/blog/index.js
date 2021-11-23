import React from "react";
import Layout from "../../components/layout";
import { Card, Row } from "react-bootstrap";
import { Link } from "gatsby";

export default function Blog() {
  const spacing = {
    margin: "15px",
  };

  return (
    <Layout>
      <h2 style={{ marginLeft: "100px" }}>Blog</h2>
      <div style={{ marginLeft: "200px", marginRight: "200px" }}>
        <Row>
          <Link
            to="/blog/readBlog"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Card.Body>
              <Card.Title style={spacing}>
                UI Interactions of the week
              </Card.Title>
              <Card.Subtitle style={spacing}>
                23 Nov 2021 | My Blog
              </Card.Subtitle>
              <Card.Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </Card.Text>
            </Card.Body>
          </Link>
          <hr style={{ border: "1px solid #E0E0E0" }} />
        </Row>
        <Row>
          <Card.Body>
            <Card.Title style={spacing}>UI Interactions of the week</Card.Title>
            <Card.Subtitle style={spacing}>23 Nov 2021 | My Blog</Card.Subtitle>
            <Card.Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </Card.Text>
          </Card.Body>
          <hr style={{ border: "1px solid #E0E0E0" }} />
        </Row>
        <Row>
          <Card.Body>
            <Card.Title style={spacing}>UI Interactions of the week</Card.Title>
            <Card.Subtitle style={spacing}>23 Nov 2021 | My Blog</Card.Subtitle>
            <Card.Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </Card.Text>
          </Card.Body>
          <hr style={{ border: "1px solid #E0E0E0" }} />
        </Row>
      </div>
    </Layout>
  );
}
