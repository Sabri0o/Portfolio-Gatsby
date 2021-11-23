import React from "react";
import Layout from "../components/layout";
import Info from "./info";
import RecentPosts from "./recentPosts";
import Works from "./works";
export default function Home() {
  return (
    <Layout>
      <Info />
      <RecentPosts />
      <Works />
    </Layout>
  );
}
