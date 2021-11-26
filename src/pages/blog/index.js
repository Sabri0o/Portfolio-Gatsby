import React from "react";
import Layout from "../../components/layout";
import { Card, Row, Container } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/blog.css";
export default function Blog({ data }) {
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px", marginTop: "100px" }}>Blog</h2>
      <Container>
        {data.allMdx.nodes.map((node) => (
          <Row key={node.slug}>
            <Link
              to={`/blog/${node.slug}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Card.Body>
                <Card.Title className="titleStyle">
                  {node.frontmatter.title}
                </Card.Title>
                <Card.Subtitle className="subTitleStyle">
                  {node.frontmatter.date} | {node.frontmatter.topic}
                </Card.Subtitle>
                <Card.Text className="textStyle">{node.excerpt} </Card.Text>
              </Card.Body>
            </Link>
            <Row style={{ marginTop: "20px" }}>
              <hr style={{ border: "1px solid #E0E0E0" }} />
            </Row>
          </Row>
        ))}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/.*.mdx$/" } }
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
