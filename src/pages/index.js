import React from "react";
import Layout from "../components/layout";
import Info from "./info";
import RecentPosts from "./recentPosts";
import WorksHome from "./worksHome";
import { graphql } from "gatsby";
import { postContext } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ data }) {
  return (
    <Layout>
      <Info />
      <postContext.Provider value={data.allMdx.nodes}>
        <RecentPosts />
      </postContext.Provider>
      <WorksHome />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(limit: 2, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt(pruneLength: 100)
        slug
        frontmatter {
          date
          title
          topic
        }
      }
    }
  }
`;
