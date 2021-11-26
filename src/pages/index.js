import React from "react";
import Layout from "../components/layout";
import { Col, Card, Row, Container } from "react-bootstrap";
import Info from "./info";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const recentPostStyle = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  color: "#21243D",
  justifyContent: "flex-start",
};

const viewAll = {
  display: "flex",
  justifyContent: "flex-end",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  color: "#00A8CC",
};

const featuredWork = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  color: "#21243D",
  justifyContent: "flex-start",
};

const postCardStyle = {
  Radius: "4px",
};

const postCardHeader = {
  marginTop: "20px",
  marginBottom: "20px",
};

const postCardRow = {
  marginBottom: "20px",
};

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

export default function Home({ data }) {
  const posts = data.allMdx.nodes
    .filter((data) => data.parent.sourceInstanceName === "blog")
    .slice(0, 2);
  const works = data.allMdx.nodes
    .filter((data) => data.parent.sourceInstanceName === "featuredWorks")
    .slice(0, 3);

  return (
    <Layout>
      <Info />
      <div style={{ backgroundColor: "#EDF7FA" }}>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Row style={postCardHeader}>
              <Col style={recentPostStyle}>Recent posts</Col>
              <Col style={viewAll}>
                <Link to="/blog">view all</Link>
              </Col>
            </Row>
            <Row style={postCardRow}>
              {posts.map((post) => (
                <Col key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Card style={postCardStyle}>
                      <Card.Body>
                        <Card.Title style={title}>
                          {post.frontmatter.title}{" "}
                        </Card.Title>
                        <Card.Subtitle style={topic}>
                          {post.frontmatter.date} || {post.frontmatter.topic}
                        </Card.Subtitle>
                        <Card.Text>{post.excerpt}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <span style={featuredWork}> Featured work</span>
        </Row>
      </Container>

      {works.map((work) => {
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
                    <a href={work.frontmatter.github} target="_blank"  rel="noreferrer" >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ color: "#21243D" }}
                      />
                    </a>
                    {` | `}
                    <a href={work.frontmatter.workUrl} target="_blank"  rel="noreferrer" >
                      <FontAwesomeIcon
                        icon={faLink}
                        size="2x"
                        style={{ color: "#21243D" }}
                      />
                    </a>
                  </Card.Subtitle>
                </Card.Body>
              </Col>
              <Row style={{ marginTop: "20px" }}>
                <hr style={{ border: "1px solid #E0E0E0" }} />
              </Row>
            </Row>
          </Container>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt(pruneLength: 200)
        slug
        parent {
          ... on File {
            sourceInstanceName
          }
        }
        frontmatter {
          date
          github
          workUrl
          title
          topic
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
