import React from "react";
import Layout from "../../components/layout";
import { Card, Row, Container } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Blog({ data }) {
  const titleStyle = {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "44px",
    color: "#21243D",
  };
  const subTitleStyle = {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "29px",
    color: "#8695A4",
  };
  const textStyle = {
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "23px",
  };
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px",marginTop: "100px"  }}>Blog</h2>
      {data.allMdx.nodes.map((node) => (
        <Container>
          <Row key={node.id}>
            <Link
              to={`/blog/${node.slug}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Card.Body>
                <Card.Title style={titleStyle}>
                  {node.frontmatter.title}
                </Card.Title>
                <Card.Subtitle style={subTitleStyle}>
                  {node.frontmatter.date} | {node.frontmatter.topic}
                </Card.Subtitle>
                <Card.Text style={textStyle}>{node.excerpt} </Card.Text>
              </Card.Body>
            </Link>
            <Row style={{ marginTop: "20px" }}>
              <hr style={{ border: "1px solid #E0E0E0" }} />
            </Row>
          </Row>
        </Container>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/(blog)/.*.mdx$/"}}
    ) {
      nodes {
        excerpt(pruneLength: 250)
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          topic
        }
        parent {
          ... on File {
            sourceInstanceName
          }
        }
      }
    }
  }
`;
