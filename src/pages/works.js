import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Row, Col, Card, Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/works.css";

const imageStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "6px",
};

export default function Work({ data }) {
  return (
    <Layout>
      <Container style={{ marginTop: "80px" }}>
        <h2>Featured work</h2>
        {data.allMdx.nodes.map((work) => {
          let image = getImage(work.frontmatter.work_image);
          return (
            <Row key={work.slug}>
              <Row className="workCardRow">
                <Col md={4} className="workImage">
                  <GatsbyImage style={imageStyle} image={image} alt="" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="title">
                      {work.frontmatter.title}
                    </Card.Title>
                    <Card.Subtitle>
                      {
                        <span className="dateStyle">
                          {work.frontmatter.date.split("-")[0]}
                        </span>
                      }
                      {` | `}
                      <span className="topic">{work.frontmatter.topic}</span>
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
            </Row>
          );
        })}
      </Container>
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
