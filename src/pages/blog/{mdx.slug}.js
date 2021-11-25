import React from "react";
import { Col } from "react-bootstrap";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function readBlog({ data }) {
  const header = {
    display: "flex",
    justifyContent: "space-between",
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

  // console.log(data);
  return (
    <Layout>
      <Col style={container}>
        <div style={center}>
          <h1>{data.mdx.frontmatter.title}</h1>
        </div>
        <div style={header}>
          <h5>{data.mdx.frontmatter.date}</h5>
          <h5>{data.mdx.timeToRead}</h5>
        </div>
        <div>
          <p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </p>
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
