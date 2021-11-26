import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "../../styles/readBlog.css";

export default function readBlog({ data }) {
  return (
    <Layout>
      <Container className="container">
        <div className="center">
          <h1>{data.mdx.frontmatter.title}</h1>
        </div>
        <div className="header">
          <h5>{data.mdx.frontmatter.date}</h5>
          <h5>{data.mdx.timeToRead}min read</h5>
        </div>
        <div>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Container>
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
