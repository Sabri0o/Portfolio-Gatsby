import React from "react";
import { Col } from "react-bootstrap";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";


export default function readBlog({ data }) {
  const header = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Heebo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "44px",
  };

  const container = {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
  };

  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Layout>
      <Col style={container}>
        <div style={center}>
          <h1>{data.mdx.frontmatter.title}</h1>
        </div>
        <div style={header}>
          <h5>{data.mdx.frontmatter.date}</h5>
          <h5>{data.mdx.timeToRead}min</h5>
        </div>
        <div>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Col>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
      timeToRead
    }
  }
`;
