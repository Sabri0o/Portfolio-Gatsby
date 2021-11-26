import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Row, Col, Card, Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const imageStyle = {
  width: "100%",
  height: "250px",
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

const dateStyle = {
  width: "40",
  height: "20",
  background: "#21243D",
  borderRadius: "16px",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "16",
  lineHeight: "60px",
  color: "#FFFFFF",
  padding: "5px",
};

const title = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "44px",
  color: "#21243D",
};

const topic = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "15px",
  lineHeight: "29px",
  color: "#8695A4",
};

export default function Work({ data }) {
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px",marginTop: "100px" }}>Featured work</h2>
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
                  <Card.Title style={title}>
                    {work.frontmatter.title}
                  </Card.Title>
                  <Card.Subtitle>
                    {
                      <span style={dateStyle}>
                        {work.frontmatter.date.split("-")[0]}
                      </span>
                    }
                    {` | `}
                    <span style={topic}>{work.frontmatter.topic}</span>
                  </Card.Subtitle>
                  <Card.Text>{work.frontmatter.description}</Card.Text>
                  <Card.Subtitle>
                    {" "}
                    <a
                      href={work.frontmatter.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ color: "#21243D" }}
                      />
                    </a>
                    {` | `}
                    <a
                      href={work.frontmatter.workUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        size="2x"
                        style={{ color: "#21243D" }}
                      />
                    </a>
                  </Card.Subtitle>
                </Card.Body>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <hr style={{ border: "1px solid #E0E0E0" }} />
            </Row>
          </Container>
        );
      })}
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
          description
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
