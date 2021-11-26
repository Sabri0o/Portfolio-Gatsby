import React from "react";
import Layout from "../components/layout";
import { Col, Card, Row } from "react-bootstrap";
import Info from "./info";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const containerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   padding: "30px",
// };

// const recentPostStyle = {
//   fontFamily: "Heebo",
//   fontStyle: "normal",
//   fontWeight: "normal",
//   fontSize: "22px",
//   color: "#21243D",
// };

// const viewAll = {
//   display: "flex",
//   justifyContent: "flex-end",
//   fontFamily: "Heebo",
//   fontStyle: "normal",
//   fontWeight: "normal",
//   fontSize: "16px",
//   color: "#00A8CC",
// };

// const cardStyle = {
//   Radius: "4px",
// };
// const center = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

const featuredWork = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  lineHeight: "60px",
  color: "#21243D",
};

const imageStyle = {
  width: "250px",
  height: "180px",
  borderRadius: "4px",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

// const center = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: "10px",
// };

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

export default function Home({ data }) {
  const posts = data.allMdx.nodes
    .filter((data) => data.parent.sourceInstanceName === "blog")
    .slice(0, 2);
  const works = data.allMdx.nodes
    .filter((data) => data.parent.sourceInstanceName === "featuredWorks")
    .slice(0, 3);

  console.log(data);
  return (
    <Layout>
      <Info />
      <div style={{ backgroundColor: "#EDF7FA", width: "auto" }}>
        <div style={containerStyle}>
          {/* <div
            style={{
              display: "flex",
              alignContent: "center",
              height: "40px",
            }}
          >
            <span style={recentPostStyle}>Recent posts</span>
          </div>
          <div style={{ padding: "5px", height: "40px" }}>
            <Link to="/blog" style={viewAll}>
              view all
            </Link>
          </div> */}

          {posts.map((post) => (
            <Col key={post.slug} style={{ padding: "10px" }}>
              <Link
                to={`/blog/${post.slug}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>{post.frontmatter.title} </Card.Title>
                    <Card.Subtitle>
                      {post.frontmatter.date} || {post.frontmatter.topic}
                    </Card.Subtitle>
                    <Card.Text>{post.excerpt}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          marginLeft: "42px",
        }}
      >
        <span style={featuredWork}> Featured work</span>
      </div>

      {works.map((work) => {
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
