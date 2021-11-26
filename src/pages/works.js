import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Row, Col, Card, Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const imageStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "6px",
};

const workCardRow = {
  display: "flex",
  alignItems: "center",
};

const workImage = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const spacing = {
  margin: "15px",
};

const dateStyle = {
  width: "70",
  height: "20",
  background: "#142850",
  borderRadius: "16px",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "18",
  lineHeight: "60px",
  color: "#FFFFFF",
  padding: "5px",
};

export default function Work({ data }) {
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px" }}>Featured work</h2>
      <div
        style={{ marginTop: "60px", marginLeft: "60px", marginRight: "60px" }}
      >
        {data.allMdx.nodes.map((work) => {
          let image = getImage(work.frontmatter.work_image);
          return (
            <Container key={work.slug} style={{ marginTop: "20px" }}>
              <Row style={workCardRow}>
                <Col md={4} style={workImage}>
                  <GatsbyImage style={imageStyle} image={image} alt="" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title style={spacing}>{work.frontmatter.title}</Card.Title>
                    <Card.Subtitle style={spacing}>
                      {<span style={dateStyle}>2021</span>}
                      {` | `}
                      {<span>project task</span>}
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Row style={{ marginTop: "20px" }}>
                  <hr style={{ border: "1px solid #E0E0E0" }} />
                </Row>
              </Row>
            </Container>
          );
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(featuredWorks)/.*.mdx$/" } }
    ) {
      nodes {
        excerpt(pruneLength: 100)
        slug
        parent {
          ... on File {
            sourceInstanceName
          }
        }
        frontmatter {
          date
          title
          topic
          github
          workUrl
          work_image {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
