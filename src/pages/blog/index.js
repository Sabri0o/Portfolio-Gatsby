import React from "react";
import Layout from "../../components/layout";
import { Card, Row } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Blog({ data }) {
  const spacing = {
    margin: "15px",
  };

  const container = {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
  };
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px" }}>Blog</h2>
      <div style={container}>
        {data.allMdx.nodes.map((node) => (
          <Row key={node.id}>
            <Link
              to={`/blog/${node.slug}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Card.Body>
                <Card.Title style={spacing}>
                  {node.frontmatter.title}
                </Card.Title>
                <Card.Subtitle style={spacing}>
                  {node.frontmatter.date} | {node.frontmatter.topic}
                </Card.Subtitle>
                <Card.Text>{node.excerpt} </Card.Text>
              </Card.Body>
            </Link>
            <hr style={{ border: "1px solid #E0E0E0" }} />
          </Row>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
query {
  allMdx(sort: { fields: frontmatter___date, order: DESC }filter: {fileAbsolutePath: {regex: "/(blog)/.*.mdx$/"}}
) {
    nodes {
      excerpt(pruneLength: 250)
      slug
      frontmatter {
        date
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
