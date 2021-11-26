import React from "react";
import Layout from "../components/layout";
import { Col, Card, Row, Container } from "react-bootstrap";
import Info from "./info";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css"


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
            <Row className="postCardHeader">
              <Col className= "recentPostStyle">Recent posts</Col>
              <Col className="viewAll">
                <Link to="/blog">view all</Link>
              </Col>
            </Row>
            <Row className="postCardRow">
              {posts.map((post) => (
                <Col key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Card className="postCardStyle">
                      <Card.Body>
                        <Card.Title className="title">
                          {post.frontmatter.title}{" "}
                        </Card.Title>
                        <Card.Subtitle className="topic">
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
          <span className="featuredWork"> Featured work</span>
        </Row>
      </Container>

      {works.map((work) => {
        let image = getImage(work.frontmatter.work_image);
        return (
          <Container key={work.slug} style={{ marginTop: "20px" }}>
            <Row className="workCardRow">
              <Col md={4} className="workImage">
                <GatsbyImage className="imageStyle" image={image} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="title">
                    {work.frontmatter.title}
                  </Card.Title>
                  <Card.Subtitle>
                    {
                      <span className="dateStyle">
                        {work.frontmatter.date.split(",")[1]}
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
          date(formatString: "MMMM D, YYYY")
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
