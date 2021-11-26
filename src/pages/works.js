import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Row, Col, Card } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const spacing = {
  margin: "15px",
};
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "30px",
};

const imageStyle = {
  width: "250px",
  height: "180px",
  borderRadius: "4px",
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
  // console.log(data);
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px" }}>Feature work</h2>
      <div
        style={{ marginTop: "60px", marginLeft: "60px", marginRight: "60px" }}
      >
        {data.allMdx.nodes.map((work) => {
          let image = getImage(work.frontmatter.work_image);
          return (
            <div
              style={{
                display: "flex",
                alignContent: "center",
                marginLeft: "42px",
              }}
            >
              <Row>
                <Col md={4} style={containerStyle}>
                  {/* <Image style={imageStyle} src={img} /> */}
                  {/* <StaticImage
                  alt="My profile photo"
                  src="../images/imgCard.png"
                  style={imageStyle}
                /> */}
                  <GatsbyImage
                    style={imageStyle}
                    image={image}
                    // alt={data.mdx.frontmatter.hero_image_alt}
                  />
                </Col>
                <Col md={8} style={containerStyle}>
                  <Card.Body>
                    <Card.Title style={spacing}>Card Title</Card.Title>
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
            </div>
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
